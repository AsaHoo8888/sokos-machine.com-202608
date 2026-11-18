import config from "@payload-config";
import { getPayload } from "payload";
import Script from "next/script";
import { unstable_cache } from "next/cache";
import { connection } from "next/server";

const getTracking = unstable_cache(async () => {
  const payload = await getPayload({ config });
  const settings = await payload.findGlobal({ slug: "site-settings", depth: 0 });
  return settings.tracking;
}, ["site-tracking"], { revalidate: 60 });

export async function Tracking() {
  await connection();
  const tracking = await getTracking();
  const gtmId = /^GTM-[A-Z0-9]+$/.test(tracking?.gtmId ?? "") ? tracking?.gtmId : null;
  const gaId = /^G-[A-Z0-9]+$/.test(tracking?.gaId ?? "") ? tracking?.gaId : null;
  const clarityId = /^[a-z0-9]+$/.test(tracking?.clarityId ?? "") ? tracking?.clarityId : null;

  return (
    <>
      {gtmId && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}</Script>
          <noscript>
            <iframe title="Google Tag Manager" src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
        </>
      )}
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}</Script>
        </>
      )}
      {clarityId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `}</Script>
      )}
    </>
  );
}
