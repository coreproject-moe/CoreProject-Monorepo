

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/list/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.72720c3e.js","_app/immutable/chunks/scheduler.036c1cd3.js","_app/immutable/chunks/index.a85a8016.js"];
export const stylesheets = [];
export const fonts = [];
