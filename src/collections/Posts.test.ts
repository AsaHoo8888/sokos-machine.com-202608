import assert from "node:assert/strict";
import test from "node:test";
import type { PayloadRequest } from "payload";

import { Posts } from "./Posts.ts";
import { Media } from "./Media.ts";

test("only published posts are public and only authenticated users can write", async () => {
  const anonymous = { req: { user: null } as PayloadRequest };
  const authenticated = { req: { user: { id: 1, collection: "users" } } as PayloadRequest };

  assert.deepEqual(await Posts.access!.read!(anonymous), { status: { equals: "published" } });
  assert.equal(await Posts.access!.read!(authenticated), true);
  for (const operation of ["create", "update", "delete"] as const) {
    assert.equal(await Posts.access![operation]!(anonymous), false);
    assert.equal(await Posts.access![operation]!(authenticated), true);
  }
});

test("media are public but uploads and changes require authentication", async () => {
  const anonymous = { req: { user: null } as PayloadRequest };
  const authenticated = { req: { user: { id: 1, collection: "users" } } as PayloadRequest };

  assert.equal(await Media.access!.read!(anonymous), true);
  for (const operation of ["create", "update", "delete"] as const) {
    assert.equal(await Media.access![operation]!(anonymous), false);
    assert.equal(await Media.access![operation]!(authenticated), true);
  }
  assert.ok(typeof Media.upload === "object");
  for (const mimeType of ["image/png", "video/mp4", "video/webm"]) {
    assert.ok(Media.upload.mimeTypes?.includes(mimeType));
  }
  const cover = Posts.fields.find((field) => "name" in field && field.name === "coverImage");
  assert.ok(cover?.type === "upload");
  assert.deepEqual(cover.filterOptions, { mimeType: { contains: "image/" } });
  assert.equal(Posts.fields.find((field) => "name" in field && field.name === "content")?.type, "richText");
});
