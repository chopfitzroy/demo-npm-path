var e,t=(e=require("react"))&&"object"==typeof e&&"default"in e?e.default:e,r=t.createContext();exports.SettingsProvider=function(e){var i=e.children,n=t.useState({setting:1}),o=n[0],s=n[1];return console.log("Settings Provider Initiated"),h(r.Provider,{value:{settings:o,setSettings:s}},i)};
//# sourceMappingURL=providers.js.map
