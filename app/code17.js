gdjs.creditsCode = {};
gdjs.creditsCode.GDNewObjectObjects1= [];
gdjs.creditsCode.GDNewObjectObjects2= [];
gdjs.creditsCode.GDNObjects1= [];
gdjs.creditsCode.GDNObjects2= [];
gdjs.creditsCode.GDNewObject2Objects1= [];
gdjs.creditsCode.GDNewObject2Objects2= [];

gdjs.creditsCode.conditionTrue_0 = {val:false};
gdjs.creditsCode.condition0IsTrue_0 = {val:false};
gdjs.creditsCode.condition1IsTrue_0 = {val:false};


gdjs.creditsCode.mapOfGDgdjs_46creditsCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.creditsCode.GDNewObject2Objects1});gdjs.creditsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.creditsCode.GDNewObject2Objects1);

gdjs.creditsCode.condition0IsTrue_0.val = false;
{
gdjs.creditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.creditsCode.mapOfGDgdjs_46creditsCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.creditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs.creditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.creditsCode.GDNewObjectObjects1.length = 0;
gdjs.creditsCode.GDNewObjectObjects2.length = 0;
gdjs.creditsCode.GDNObjects1.length = 0;
gdjs.creditsCode.GDNObjects2.length = 0;
gdjs.creditsCode.GDNewObject2Objects1.length = 0;
gdjs.creditsCode.GDNewObject2Objects2.length = 0;

gdjs.creditsCode.eventsList0(runtimeScene);
return;

}

gdjs['creditsCode'] = gdjs.creditsCode;
