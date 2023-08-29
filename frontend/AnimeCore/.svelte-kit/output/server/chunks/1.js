import { c as create_ssr_component, k as createEventDispatcher, v as validate_component } from "./ssr.js";
import { I as Info, A as Arrow_up_right } from "./arrow_up_right.js";
import { r as reporter } from "./reporter.js";
import { validator } from "@felte/validator-zod";
import "./ProgressBar.svelte_svelte_type_style_lang.js";
import { z } from "zod";
import { c as createForm } from "./create-form.js";
const _1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  const schema = z.object({
    email_or_username: z.string(),
    password: z.string()
  });
  createForm({
    initialValues: { email_or_username: "", password: "" },
    onSubmit: async (values) => {
      dispatch("submit", values);
    },
    extend: [reporter, validator({ schema })]
  });
  return `<form class="flex h-max w-full flex-col gap-[15vw] bg-surface-900 p-10 md:h-full md:justify-between md:gap-0 md:rounded-none md:p-0"><span class="flex items-center text-base font-bold uppercase leading-none tracking-widest text-white md:text-[1.2vw]" data-svelte-h="svelte-n1mpnb">hey there! welcome back</span> <form-fields class="flex flex-col gap-7 md:block"><email-or-username-field class="flex flex-col gap-[0.3rem] md:gap-[0.5vw]"><label for="email-or-username" class="text-base font-semibold leading-none md:text-[1.1vw]" data-svelte-h="svelte-t9cy9a">Email / Username</label> <input name="email-or-username" id="email-or-username" placeholder="sora_amamiya@coreproject.moe / soraamamiya#0001" class="h-12 w-full rounded-xl border-[0.4vw] border-primary-500 bg-transparent px-5 text-base font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400 md:h-[3.125vw] md:rounded-[0.75vw] md:border-[0.2vw] md:px-[1vw] md:text-[1.1vw]"> <div slot="placeholder"><info class="mt-[0.75vw] flex items-center gap-2 md:mt-[0.5vw] md:gap-[0.5vw]">${validate_component(Info, "Info").$$render($$result, { class: "w-3 opacity-70 md:w-[0.9vw]" }, {}, {})} <span class="text-[0.7rem] leading-none text-surface-300 md:text-[0.75vw]" data-svelte-h="svelte-vvepwn">we’ll send you a verification email, so please ensure it’s active</span></info></div></email-or-username-field> <password-field class="flex flex-col gap-[0.3rem] md:mt-[1.5vw] md:gap-[0.5vw]" data-svelte-h="svelte-su5lqr"><label for="password" class="text-base font-semibold leading-none md:text-[1.1vw]">Password</label> <div><div class="relative flex flex-col"><input type="text" id="password" name="password" placeholder="enter your existing password" class="h-12 w-full rounded-xl border-[0.4vw] border-primary-500 bg-transparent pl-5 text-base font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400 md:h-[3.125vw] md:rounded-[0.75vw] md:border-[0.2vw] md:pl-[1vw] md:text-[1.1vw]"></div></div></password-field> <div class="flex flex-col items-start md:mt-[3vw]"><a href="./reset-password" class="btn p-0 text-base font-semibold leading-none text-primary-600 underline md:text-[1vw]"><!-- HTML_TAG_START -->${`< forgot password? >`}<!-- HTML_TAG_END --></a></div></form-fields> <div class="flex items-center justify-between"><div class="flex flex-col gap-1 md:gap-[0.5vw]" data-svelte-h="svelte-1jhtygy"><span class="text-xs leading-none text-surface-100 md:text-[0.75vw]">Don&#39;t have a core account?</span> <a href="./register" class="text-base leading-none md:text-[1.1vw]">Register</a></div> <button type="submit" class="btn h-12 rounded-lg bg-secondary-800 p-0 px-5 text-base font-semibold md:h-[2.75vw] md:rounded-[0.5vw] md:px-[1.25vw] md:text-[0.95vw]"><span data-svelte-h="svelte-1fjw2ub">Continue</span> ${validate_component(Arrow_up_right, "ArrowUpRight").$$render($$result, { class: "w-4 rotate-45 md:w-[1vw]" }, {}, {})}</button></div></form>`;
});
export {
  _1 as default
};
