import{r as d,j as e}from"./router-B4MY1IDS.js";import{u as g,a as m,b,c as r}from"./index-CpWfk9D9.js";import{i as v,L as w,k as j,l as N,m as k,n as I}from"./ui-BfF_Q5Hj.js";const $=[j,N,k,I],u=[1,2,3,4],_=["animate-icon-palette","animate-icon-gauge","animate-icon-sparkles","animate-icon-phone"],D=[v,w],R=[1,2];function A(){const{t:a}=g(),{ref:p,isInView:o}=m({threshold:.15},!0),{ref:h,isInView:x}=m({threshold:.15},!0),[y,c]=d.useState(0);return d.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){c(0);return}const t=setInterval(()=>{c(s=>(s+1)%u.length)},3e3);return()=>clearInterval(t)},[]),e.jsxs("section",{className:"relative overflow-hidden bg-background py-24 lg:py-32",children:[e.jsx("div",{className:b,children:e.jsxs("div",{className:"grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16",children:[e.jsxs("div",{ref:p,className:"min-w-0",children:[e.jsxs("p",{className:r("mb-5 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.24em] text-accent uppercase","transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",o?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),children:[e.jsx("span",{"aria-hidden":"true",className:"h-[2px] w-8 bg-accent animate-line-pulse motion-reduce:animate-none"}),a("whyus.eyebrow")]}),e.jsxs("h2",{className:r("text-[2rem] leading-[1.1] text-foreground sm:text-[2.7rem]","transition-all duration-700 ease-out delay-100 motion-reduce:transition-none motion-reduce:transform-none",o?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),children:[a("whyus.title_start")," ",e.jsx("span",{className:"italic text-accent",children:a("whyus.title_highlight")}),"."]}),e.jsx("p",{className:r("mt-6 max-w-md text-base leading-relaxed text-muted-foreground","transition-all duration-700 ease-out delay-200 motion-reduce:transition-none motion-reduce:transform-none",o?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),children:a("whyus.desc")}),e.jsx("div",{className:"mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1",children:R.map((n,t)=>{const s=D[t],i=a(`whyus.extras.${n}.title`),l=a(`whyus.extras.${n}.desc`);return e.jsx("div",{className:r("min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",o?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),style:{transitionDelay:`${300+t*150}ms`},children:e.jsxs("div",{className:"relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft",children:[e.jsx("div",{className:"absolute left-0 top-1/4 h-1/2 w-1 rounded-r-full bg-accent animate-border-pulse motion-reduce:animate-none",style:{animationDelay:`${t*1.5}s`}}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{size:18,className:"shrink-0 text-accent","aria-hidden":"true"}),e.jsx("h3",{className:"text-lg text-foreground",children:i})]}),e.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:l})]})},n)})})]}),e.jsx("div",{ref:h,className:"grid gap-5 sm:grid-cols-2",children:u.map((n,t)=>{const s=$[t],i=a(`whyus.pillars.${n}.title`),l=a(`whyus.pillars.${n}.desc`),f=_[t];return e.jsx("div",{className:r("min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",x?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-8 scale-95"),style:{transitionDelay:`${t*100}ms`},children:e.jsxs("article",{className:r("group relative h-full overflow-hidden rounded-3xl border-2 p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-primary hover:shadow-elevated hover:border-transparent",y===t?"bg-primary/5 border-primary shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.4)]":"bg-card border-border/40 shadow-none"),children:[e.jsx("span",{className:"font-display text-4xl text-accent/50 transition-colors duration-400 group-hover:text-accent-soft inline-block animate-number-breathe motion-reduce:animate-none",style:{animationDelay:`${t*.5}s`},children:String(t+1).padStart(2,"0")}),e.jsx("div",{className:"mt-6",children:e.jsx(s,{size:22,"aria-hidden":"true",className:r("text-primary transition-colors duration-400 group-hover:text-accent-soft origin-center motion-reduce:animate-none",f),style:{animationDelay:`${t*.7}s`}})}),e.jsx("h3",{className:"mt-4 text-xl text-foreground transition-colors duration-400 group-hover:text-primary-foreground",children:i}),e.jsx("p",{className:"mt-2.5 text-sm leading-relaxed text-muted-foreground transition-colors duration-400 group-hover:text-primary-foreground/70",children:l})]})},n)})})]})}),e.jsx("style",{children:`
        @keyframes line-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-line-pulse {
          animation: line-pulse 3s ease-in-out infinite;
        }

        @keyframes border-pulse {
          0%, 100% { opacity: 0.2; box-shadow: 0 0 0px 0px hsl(var(--accent) / 0); }
          50% { opacity: 1; box-shadow: 0 0 10px 1px hsl(var(--accent) / 0.5); }
        }
        .animate-border-pulse {
          animation: border-pulse 4s ease-in-out infinite;
        }

        @keyframes number-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-number-breathe {
          animation: number-breathe 4s ease-in-out infinite;
        }

        @keyframes icon-palette {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(18deg); }
        }
        .animate-icon-palette {
          animation: icon-palette 4s ease-in-out infinite;
        }

        @keyframes icon-gauge {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .animate-icon-gauge {
          animation: icon-gauge 3.5s ease-in-out infinite;
        }

        @keyframes icon-sparkles {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(15deg); }
        }
        .animate-icon-sparkles {
          animation: icon-sparkles 4.5s ease-in-out infinite;
        }

        @keyframes icon-phone {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(-8deg) translateY(-3px); }
        }
        .animate-icon-phone {
          animation: icon-phone 5s ease-in-out infinite;
        }
      `})]})}export{A as WhyUs};
