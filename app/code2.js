gdjs._5204Code = {};
gdjs._5204Code.GDNewObjectObjects1= [];
gdjs._5204Code.GDNewObjectObjects2= [];
gdjs._5204Code.GDNewObject2Objects1= [];
gdjs._5204Code.GDNewObject2Objects2= [];

gdjs._5204Code.conditionTrue_0 = {val:false};
gdjs._5204Code.condition0IsTrue_0 = {val:false};
gdjs._5204Code.condition1IsTrue_0 = {val:false};


gdjs._5204Code.mapOfGDgdjs_46_955204Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs._5204Code.GDNewObject2Objects1});gdjs._5204Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs._5204Code.GDNewObject2Objects1);

gdjs._5204Code.condition0IsTrue_0.val = false;
{
gdjs._5204Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._5204Code.mapOfGDgdjs_46_955204Code_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs._5204Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs._5204Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._5204Code.GDNewObjectObjects1.length = 0;
gdjs._5204Code.GDNewObjectObjects2.length = 0;
gdjs._5204Code.GDNewObject2Objects1.length = 0;
gdjs._5204Code.GDNewObject2Objects2.length = 0;

gdjs._5204Code.eventsList0(runtimeScene);
return;

}

gdjs['_5204Code'] = gdjs._5204Code;
