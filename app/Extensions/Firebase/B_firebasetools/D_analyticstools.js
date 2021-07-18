var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let firebaseTools;
    (function(firebaseTools2) {
      let analytics;
      (function(_analytics) {
        let analytics2 = null;
        _analytics.log = (eventName, eventData) => {
          if (!analytics2)
            return;
          let eventProperties;
          if (eventData) {
            try {
              eventProperties = JSON.parse(eventData);
            } catch {
              eventProperties = {eventData};
            }
          }
          analytics2.logEvent(eventName, eventProperties);
        };
        _analytics.setUserID = (newUID) => {
          if (analytics2)
            analytics2.setUserId(newUID);
        };
        _analytics.setProperty = (propertyName, propertyData) => {
          if (!analytics2)
            return;
          let properties = {};
          try {
            properties[propertyName] = JSON.parse(propertyData);
          } catch {
            properties[propertyName] = propertyData;
          }
          analytics2.setUserProperties(properties);
        };
        gdjs2.evtTools.firebaseTools.onAppCreated.push(() => {
          analytics2 = firebase.analytics();
        });
        gdjs2.registerRuntimeSceneLoadedCallback((runtimeScene) => {
          if (analytics2)
            analytics2.setCurrentScreen(runtimeScene.getName());
        });
      })(analytics = firebaseTools2.analytics || (firebaseTools2.analytics = {}));
    })(firebaseTools = evtTools2.firebaseTools || (evtTools2.firebaseTools = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=D_analyticstools.js.map
