export const indexTemplateHtml = `<div><tree :data="data" @toggle="toggle($event)" @change="change($event)"></tree><div class="file">{{file}}</div><pre v-html="selectedNodeText"></pre></div>`;
