import assert from "node:assert/strict";
import test from "node:test";
import { youtubeEmbedUrl } from "./youtube.ts";

test("accepts YouTube video links and builds a fixed embed URL", () => {
  for (const url of [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=20",
    "https://youtu.be/dQw4w9WgXcQ?si=test",
    "https://m.youtube.com/shorts/dQw4w9WgXcQ",
    "https://www.youtube.com/live/dQw4w9WgXcQ",
    "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  ]) assert.equal(youtubeEmbedUrl(url), "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ");
});

test("rejects invalid links and untrusted hosts", () => {
  for (const url of [null, "", "not a url", "javascript:alert(1)",
    "https://youtube.com.evil.com/watch?v=dQw4w9WgXcQ",
    "https://example.com/dQw4w9WgXcQ", "https://youtube.com/watch?v=invalid",
    "https://youtu.be/dQw4w9WgXcQ/extra", "https://youtube.com/playlist?list=test",
  ]) assert.equal(youtubeEmbedUrl(url), null);
});
