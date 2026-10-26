import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/about.css?raw";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us | Hair_by_beacon Kubwa" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"\x62g-primary px-4 py-2 text-center text-xs font-medium tracking-wide text-primary-foreground"}>Your Beauty Essentials, All in One Place ✨</div>
      <ImportedHeader />
      <main>
        <section className={"\x62g-blush"}>
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
            <p className="eyebrow">About us</p>
            <h1 className="mt-3 text-4xl text-primary md:text-6xl">Beauty Essentials, Closer to You</h1>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8">
          <img className="aspect-[4/5] w-full rounded-[2rem] object-contain" src="/site-assets/53e26930263430b0.jpg" alt="A wig from the Hair by Beacon collection" loading="lazy" />
          <div className={"\x73pace-y-5 text-muted-foreground"}>
            <p className="text-lg text-foreground">Hair_by_beacon is a beauty supply store based in Kubwa, Abuja, helping customers explore hair and beauty essentials in one convenient place.</p>
            <p>From wigs and braiding hair to haircare, styling products and accessories, browse our collection online or get in touch to ask about products before visiting.</p>
            <div className={"flex flex-col gap-3 pt-4 \x73m:\x66lex-row"}>
              <a className="btn btn-primary" href="/shop">Explore Products</a>
              <a className="btn btn-outline" href="https://wa.me/2347025941898?text=Hello%20Hair_by_beacon%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." rel="noopener noreferrer" target="_blank">Chat With Us</a>
            </div>
          </div>
        </section>
      </main>
      <ImportedFooter />
      <a className={"fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full \x62g-whatsapp text-whatsapp-foreground \x73hadow-soft transition \x68over:\x73cale-105"} aria-label="Chat on WhatsApp" href="https://wa.me/2347025941898?text=Hello%20Hair_by_beacon%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." rel="noopener noreferrer" target="_blank">
        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
        </svg>
      </a>
      <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
      <ImportedAsideEditWithLovable />
    </>
  );
}

function ImportedHeader() {
  return (
    <header className={"sticky top-0 z-40 \x62order-b \x62g-background/\x390 \x62ackdrop-blur"}>
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 md:h-28 md:px-8">
        <a className="flex shrink-0 items-center" aria-label="Hair_by_beacon home" href="/">
          <img className="size-20 object-contain md:size-24" src="/site-assets/a1218ca0564088bb.png" alt="Hair by Beacon — gold woman and lighthouse logo" width="768" height="768" />
        </a>
        <nav className={"hidden gap-8 \x6dd:\x66lex"} aria-label="Main">
          <a className={"text-sm font-medium \x74ext-foreground/\x380 hover:text-primary"} href="/">Home</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 hover:text-primary"} href="/shop">Shop</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 hover:text-primary"} href="/categories">Categories</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 hover:text-primary text-primary"} aria-current="page" href="#">About Us</a>
          <a className={"text-sm font-medium \x74ext-foreground/\x380 hover:text-primary"} href="/contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a className={"btn btn-whatsapp hidden !min-h-10 !px-4 \x73m:\x69nline-flex"} href="https://wa.me/2347025941898?text=Hello%20Hair_by_beacon%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." rel="noopener noreferrer" target="_blank"><svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg> WhatsApp</a>
          <a className={"relative grid size-11 place-items-center rounded-full \x68over:\x62g-secondary"} aria-label="Order list, 0 items" href="/cart">
            <svg className="size-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 10a4 4 0 0 1-8 0" />
              <path d="M3.103 6.034h17.794" />
              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
            </svg>
          </a>
          <button className={"grid size-11 place-items-center rounded-full \x68over:\x62g-secondary \x6dd:\x68idden"} aria-label="Menu" aria-expanded="false">
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function ImportedFooter() {
  return (
    <footer className={"mt-24 \x62g-primary text-primary-foreground"}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div>
          <a className="inline-block" aria-label="Hair_by_beacon home" href="/">
            <img className="size-36 object-contain" src="/site-assets/a1218ca0564088bb.png" alt="Hair by Beacon — gold woman and lighthouse logo" width="768" height="768" loading="lazy" />
          </a>
          <p className={"mt-3 text-sm \x74ext-primary-foreground/\x375"}>Your beauty supply destination in Kubwa, Abuja — hair and beauty essentials in one place.</p>
        </div>
        <div>
          <p className="eyebrow">Quick links</p>
          <ul className={"mt-4 \x73pace-y-2 text-sm"}>
            <li>
              <a className="hover:text-gold" href="/">Home</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/shop">Shop</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/categories">Categories</a>
            </li>
            <li>
              <a className="hover:text-gold" aria-current="page" href="#">About Us</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/contact">Contact</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/terms">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Categories</p>
          <ul className={"mt-4 \x73pace-y-2 text-sm"}>
            <li>
              <a className="hover:text-gold" href="/shop?category=wigs-extensions">Wigs &amp; Hair Extensions</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/shop?category=braiding-hair">Braiding Hair</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/shop?category=weaves-closures">Weaves &amp; Closures</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/shop?category=haircare">Haircare &amp; Treatment</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/shop?category=styling">Hair Styling Products</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/shop?category=accessories">Hair Accessories</a>
            </li>
            <li>
              <a className="hover:text-gold" href="/shop?category=beauty-essentials">Beauty Essentials</a>
            </li>
          </ul>
        </div>
        <div className={"\x73pace-y-3 text-sm"}>
          <p className="eyebrow">Visit &amp; contact</p>
          <a className="flex gap-2 hover:text-gold" href="tel:+2347025941898"><svg className="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>+234 702 594 1898</a>
          <a className="flex gap-2 hover:text-gold" href="https://wa.me/2347025941898?text=Hello%20Hair_by_beacon%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." rel="noopener noreferrer" target="_blank"><svg className="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>WhatsApp us</a>
          <a className="flex gap-2 hover:text-gold" href={"https://www.google.com/maps/search/?api=1&query=Hair_by_beacon%2C%20Apumiri%20Close%2C%20Maroko%20Road%2C%20Kubwa%2C%20Abuja%2C%20Nigeria"} rel="noopener noreferrer" target="_blank"><svg className="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>Apumiri Close, Maroko Road, PW, Kubwa 901101, FCT, Nigeria</a>
        </div>
      </div>
      <div className={"\x62order-t \x62order-primary-foreground/\x315 py-6 text-center text-xs \x74ext-primary-foreground/\x360"}>© 2026 Hair_by_beacon. All rights reserved.</div>
    </footer>
  );
}

function ImportedAsideEditWithLovable() {
  return (
    <aside className="[will-change:transform,opacity]" id="lovable-badge" role="complementary" dir="ltr" lang="en" aria-label="Edit with Lovable"><a aria-label="Edit with Lovable" href="https://lovable.dev/projects/lovp_5bb61qba3n9yx860m4dhs1vvye?utm_source=lovable-badge" id="lovable-badge-cta" rel="noopener nofollow" target="_blank">{"\n\t\t"}<span id="lovable-badge-text">Edit with</span>{"\n\t\t"}<span id="lovable-badge-logo"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="16" fill="none" viewBox="0 0 52 16">{"\n  "}<path fill="#FCFBF8" fillRule="evenodd" d="M20.318 5.25c.643 0 1.206.14 1.69.418a2.81 2.81 0 0 1 1.118 1.191c.266.513.4 1.115.4 1.807s-.134 1.296-.4 1.812a2.81 2.81 0 0 1-1.118 1.193c-.484.278-1.047.418-1.69.418s-1.208-.14-1.695-.418a2.85 2.85 0 0 1-1.125-1.193c-.262-.516-.393-1.12-.393-1.812s.131-1.294.393-1.807a2.848 2.848 0 0 1 1.125-1.191c.487-.279 1.052-.418 1.695-.418Zm0 1.425c-.27 0-.504.076-.7.228-.193.147-.34.37-.443.67-.102.295-.153.66-.153 1.093 0 .435.05.801.153 1.1.102.3.25.524.443.676.196.147.43.22.7.22.27 0 .502-.073.694-.22.193-.152.341-.375.443-.67.103-.299.153-.667.153-1.106 0-.65-.112-1.145-.337-1.481a1.08 1.08 0 0 0-.953-.51ZM32.7 5.25c.61 0 1.127.1 1.549.3.422.197.74.48.953.849.217.368.325.809.325 1.32v2.704c0 .29.02.562.062.812.044.245.108.4.19.466V12h-1.935a5.895 5.895 0 0 1-.105-.684 7.745 7.745 0 0 1-.02-.228 2.293 2.293 0 0 1-.151.203c-.205.242-.47.437-.793.584-.32.143-.685.215-1.094.215-.406 0-.77-.08-1.094-.24a1.845 1.845 0 0 1-.756-.682 1.984 1.984 0 0 1-.27-1.045c0-.606.178-1.069.535-1.388.356-.324.87-.534 1.542-.633l1.125-.16c.225-.032.403-.074.534-.123a.622.622 0 0 0 .288-.196.549.549 0 0 0 .093-.327.65.65 0 0 0-.11-.367.702.702 0 0 0-.32-.27c-.14-.07-.31-.105-.51-.105-.32 0-.576.083-.768.251-.193.164-.298.39-.314.676h-1.923c.016-.434.147-.82.393-1.155.25-.34.596-.604 1.039-.792.442-.189.954-.283 1.535-.283Zm.99 3.498a.98.98 0 0 1-.215.14 2.49 2.49 0 0 1-.584.178l-.473.092c-.315.061-.553.156-.713.283-.155.127-.233.305-.233.534 0 .23.084.412.252.547.168.135.383.203.645.203s.494-.058.694-.173c.201-.118.355-.282.461-.49.11-.21.166-.448.166-.714v-.6Zm4.526-2.375c.065-.125.138-.243.221-.349.197-.25.437-.44.719-.571.282-.135.6-.203.952-.203.528 0 .988.138 1.377.412.389.275.688.67.896 1.186.21.512.314 1.12.314 1.824 0 .7-.107 1.309-.32 1.825-.213.512-.518.906-.915 1.18-.393.275-.854.412-1.383.412-.352 0-.667-.062-.946-.184a1.832 1.832 0 0 1-.7-.554 2.2 2.2 0 0 1-.234-.383V12h-1.843V3h1.862v3.373Zm1.284.296c-.274 0-.51.085-.707.253-.192.163-.338.397-.436.7a3.376 3.376 0 0 0-.148 1.05c0 .406.05.759.148 1.058.098.299.243.53.436.694.197.164.433.246.707.246.279 0 .512-.082.7-.246.193-.164.336-.395.43-.694.099-.3.148-.652.148-1.058 0-.405-.05-.757-.147-1.056-.095-.299-.238-.53-.43-.694a1.015 1.015 0 0 0-.7-.253Zm9.416-1.419c.602 0 1.136.131 1.604.393.466.262.829.643 1.086 1.143.263.5.394 1.097.394 1.794 0 .25-.002.449-.006.596H47.51c.018.288.071.538.164.75a1.3 1.3 0 0 0 .491.596c.214.13.465.196.757.196.319 0 .583-.082.792-.246.209-.167.34-.403.393-.706h1.862a2.48 2.48 0 0 1-.485 1.235 2.54 2.54 0 0 1-1.051.805c-.439.188-.949.283-1.53.283-.655 0-1.225-.125-1.708-.375a2.672 2.672 0 0 1-1.13-1.143c-.267-.508-.4-1.137-.4-1.887 0-.712.14-1.327.418-1.843a2.86 2.86 0 0 1 1.155-1.186c.491-.27 1.051-.405 1.678-.405Zm-.044 1.345c-.274 0-.516.068-.725.203a1.29 1.29 0 0 0-.479.59 2.045 2.045 0 0 0-.132.498h2.562a1.873 1.873 0 0 0-.138-.602 1.061 1.061 0 0 0-.418-.516 1.243 1.243 0 0 0-.67-.173Z" clipRule="evenodd" />{"\n  "}<path fill="#FCFBF8" d="m26.605 9.995 1.342-4.566h1.924L27.628 12h-2.07l-2.33-6.57h1.98l1.397 4.565Zm-13.013.143h2.256c1.632 0 1.421 1.837 1.418 1.861h-5.603V3h1.93v7.138Zm31.516 1.861h-1.862V3h1.862v8.999Z" />{"\n  "}<path fill="url(#a)" fillRule="evenodd" d="M2.7 3c1.492 0 2.7 1.192 2.7 2.663v1.012h.9c1.49 0 2.7 1.192 2.7 2.662S7.791 12 6.3 12H0V5.663C0 4.193 1.209 3 2.7 3Z" clipRule="evenodd" />{"\n  "}<defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(-1.54236 7.07838 -10.231 -2.15602 4.627 5.022)" gradientUnits="userSpaceOnUse"><stop offset=".106" stopColor="#FE7B02" /><stop offset=".394" stopColor="#FE3F21" /><stop offset=".608" stopColor="#F858BC" /><stop offset=".929" stopColor="#575ECF" /></radialGradient></defs>{"\n"}</svg>{"\n\n"}</span>{"\n\t"}</a><span id="lovable-badge-divider" aria-hidden="true" /><button className="min-w-[24px]" id="lovable-badge-close" aria-label="Dismiss" title="Dismiss" type="button">{"\n\t\t"}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">{"\n\t\t\t"}<path d="M10.646 4.646a.5.5 0 1 1 .707.708L8.707 8l2.646 2.646a.5.5 0 1 1-.707.707L8 8.707l-2.646 2.646a.5.5 0 1 1-.708-.707L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708L8 7.293l2.646-2.647Z" />{"\n\t\t"}</svg>{"\n\t"}</button></aside>
  );
}
