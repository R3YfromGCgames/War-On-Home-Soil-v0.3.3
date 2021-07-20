gdjs.well_32done_33Code = {};
gdjs.well_32done_33Code.GDNewObjectObjects1= [];
gdjs.well_32done_33Code.GDNewObjectObjects2= [];
gdjs.well_32done_33Code.GDNewObject2Objects1= [];
gdjs.well_32done_33Code.GDNewObject2Objects2= [];
gdjs.well_32done_33Code.GDNewObject3Objects1= [];
gdjs.well_32done_33Code.GDNewObject3Objects2= [];

gdjs.well_32done_33Code.conditionTrue_0 = {val:false};
gdjs.well_32done_33Code.condition0IsTrue_0 = {val:false};
gdjs.well_32done_33Code.condition1IsTrue_0 = {val:false};


gdjs.well_32done_33Code.mapOfGDgdjs_46well_9532done_9533Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.well_32done_33Code.GDNewObject2Objects1});gdjs.well_32done_33Code.mapOfGDgdjs_46well_9532done_9533Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.well_32done_33Code.GDNewObject3Objects1});gdjs.well_32done_33Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.well_32done_33Code.GDNewObject2Objects1);

gdjs.well_32done_33Code.condition0IsTrue_0.val = false;
{
gdjs.well_32done_33Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.well_32done_33Code.mapOfGDgdjs_46well_9532done_9533Code_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.well_32done_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lvl 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.well_32done_33Code.GDNewObject3Objects1);

gdjs.well_32done_33Code.condition0IsTrue_0.val = false;
{
gdjs.well_32done_33Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.well_32done_33Code.mapOfGDgdjs_46well_9532done_9533Code_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.well_32done_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs.well_32done_33Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.well_32done_33Code.GDNewObjectObjects1.length = 0;
gdjs.well_32done_33Code.GDNewObjectObjects2.length = 0;
gdjs.well_32done_33Code.GDNewObject2Objects1.length = 0;
gdjs.well_32done_33Code.GDNewObject2Objects2.length = 0;
gdjs.well_32done_33Code.GDNewObject3Objects1.length = 0;
gdjs.well_32done_33Code.GDNewObject3Objects2.length = 0;

gdjs.well_32done_33Code.eventsList0(runtimeScene);
return;

}

gdjs['well_32done_33Code'] = gdjs.well_32done_33Code;
