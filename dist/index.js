(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["is-headless-browser"] = {}));
})(this, (function (exports) { 'use strict';

  var checks = [
    {
      name: "Known headless UserAgent",
      check: function () {
        var userAgent = navigator.userAgent;

        if (userAgent) {
          userAgent = userAgent.toLowerCase();
        }

        return (
          userAgent.indexOf("slimerjs") !== -1 ||
          userAgent.indexOf("scrape") !== -1 ||
          userAgent.indexOf("phantomjs") !== -1 ||
          userAgent.indexOf("headless") !== -1 ||
          userAgent.indexOf("crawl") !== -1 ||
          userAgent.indexOf("bot") !== -1
        );
      },
    },
    {
      name: "Known headless properties",
      check: function () {
        return (
          window["__$webdriverAsyncExecutor"] ||
          window.watinExpressionResult ||
          window.watinExpressionError ||
          window.spynner_additional_js_loaded ||
          window.phantom ||
          window.OSMJIF ||
          window.geb ||
          window.fmget_targets ||
          window.exposedFn ||
          window.domAutomationController ||
          window.domAutomation ||
          window.Cypress ||
          window.cdc_adoQpoasnfa76pfcZLmcfl_Symbol ||
          window.cdc_adoQpoasnfa76pfcZLmcfl_Promise ||
          window.cdc_adoQpoasnfa76pfcZLmcfl_Array ||
          window.callSelenium ||
          window.callPhantom ||
          window.calledSelenium ||
          window.calledPhantom ||
          window.blender ||
          window.awesomium ||
          window._WEBDRIVER_ELEM_CACHE ||
          window._Selenium_IDE_Recorder ||
          window._phantom ||
          window.__webdriverFuncgeb ||
          window.__webdriver_script_function ||
          window.__webdriver__chr ||
          window.__selenium_evaluate ||
          window.__nightmare ||
          window.__lastWatirPrompt ||
          window.__lastWatirConfirm ||
          window.__lastWatirAlert ||
          navigator.webdriver ||
          globalThis.__pwInitScripts ||
          globalThis.__playwright__binding__ ||
          document["$chrome_asyncScriptInfo"] ||
          document.__webdriver_unwrapped ||
          document.__webdriver_script_func ||
          document.__webdriver_script_fn ||
          document.__webdriver_evaluate ||
          document.__selenium_unwrapped ||
          document.__selenium_evaluate ||
          document.__selenium_evaluate ||
          document.__fxdriver_unwrapped ||
          document.__fxdriver_evaluate ||
          document.__driver_unwrapped ||
          document.__driver_evaluate
        );
      },
    } ];

  function isHeadlessBrowser() {
    for (var i = 0; i < checks.length; i++) {
      if (checks[i].check()) {
        return true;
      }
    }

    return false;
  }

  exports.checks = checks;
  exports.isHeadlessBrowser = isHeadlessBrowser;

}));
