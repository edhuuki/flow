/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ExamplePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  dateFormat: "YYYY-MM-DD"
};
var ExamplePlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    const item = this.addStatusBarItem();
    item.createEl("div", { text: "Hello from the status bar \u{1F44B}" });
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmludGVyZmFjZSBFeGFtcGxlUGx1Z2luU2V0dGluZ3Mge1xuICBkYXRlRm9ybWF0OiBzdHJpbmc7XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFBhcnRpYWw8RXhhbXBsZVBsdWdpblNldHRpbmdzPiA9IHtcbiAgZGF0ZUZvcm1hdDogXCJZWVlZLU1NLUREXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3MhOiBFeGFtcGxlUGx1Z2luU2V0dGluZ3M7XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cblx0Y29uc3QgaXRlbSA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xuICAgIGl0ZW0uY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiBcIkhlbGxvIGZyb20gdGhlIHN0YXR1cyBiYXIgXHVEODNEXHVEQzRCXCIgfSk7XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXVCO0FBTXZCLElBQU0sbUJBQW1EO0FBQUEsRUFDdkQsWUFBWTtBQUNkO0FBRUEsSUFBcUIsZ0JBQXJCLGNBQTJDLHVCQUFPO0FBQUEsRUFHaEQsTUFBTSxTQUFTO0FBQ2IsVUFBTSxLQUFLLGFBQWE7QUFFM0IsVUFBTSxPQUFPLEtBQUssaUJBQWlCO0FBQ2hDLFNBQUssU0FBUyxPQUFPLEVBQUUsTUFBTSxzQ0FBK0IsQ0FBQztBQUFBLEVBQy9EO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDbkIsU0FBSyxXQUFXLE9BQU8sT0FBTyxDQUFDLEdBQUcsa0JBQWtCLE1BQU0sS0FBSyxTQUFTLENBQUM7QUFBQSxFQUMzRTtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFVBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUFBLEVBQ25DO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
