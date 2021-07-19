gdjs.main_32menuCode = {};
gdjs.main_32menuCode.GDStart_95Objects1= [];
gdjs.main_32menuCode.GDStart_95Objects2= [];
gdjs.main_32menuCode.GDNewObjectObjects1= [];
gdjs.main_32menuCode.GDNewObjectObjects2= [];
gdjs.main_32menuCode.GDNewObject3Objects1= [];
gdjs.main_32menuCode.GDNewObject3Objects2= [];
gdjs.main_32menuCode.GDNewObject2Objects1= [];
gdjs.main_32menuCode.GDNewObject2Objects2= [];
gdjs.main_32menuCode.GDexitObjects1= [];
gdjs.main_32menuCode.GDexitObjects2= [];
gdjs.main_32menuCode.GDNewObject4Objects1= [];
gdjs.main_32menuCode.GDNewObject4Objects2= [];
gdjs.main_32menuCode.GDStart_952Objects1= [];
gdjs.main_32menuCode.GDStart_952Objects2= [];
gdjs.main_32menuCode.GDNewObject5Objects1= [];
gdjs.main_32menuCode.GDNewObject5Objects2= [];
gdjs.main_32menuCode.GDNewObject6Objects1= [];
gdjs.main_32menuCode.GDNewObject6Objects2= [];

gdjs.main_32menuCode.conditionTrue_0 = {val:false};
gdjs.main_32menuCode.condition0IsTrue_0 = {val:false};
gdjs.main_32menuCode.condition1IsTrue_0 = {val:false};


gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDStart_9595Objects1Objects = Hashtable.newFrom({"Start_": gdjs.main_32menuCode.GDStart_95Objects1});gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDStart_95952Objects1Objects = Hashtable.newFrom({"Start_2": gdjs.main_32menuCode.GDStart_952Objects1});gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.main_32menuCode.GDexitObjects1});gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.main_32menuCode.GDNewObject4Objects1});gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.main_32menuCode.GDNewObject6Objects1});gdjs.main_32menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start_"), gdjs.main_32menuCode.GDStart_95Objects1);

gdjs.main_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDStart_9595Objects1Objects, runtimeScene, true, false);
}if (gdjs.main_32menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_2"), gdjs.main_32menuCode.GDStart_952Objects1);

gdjs.main_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDStart_95952Objects1Objects, runtimeScene, true, false);
}if (gdjs.main_32menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "referance level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.main_32menuCode.GDexitObjects1);

gdjs.main_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDexitObjects1Objects, runtimeScene, true, false);
}if (gdjs.main_32menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.main_32menuCode.GDNewObject4Objects1);

gdjs.main_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if (gdjs.main_32menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "OPtions", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.main_32menuCode.GDNewObject6Objects1);

gdjs.main_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.main_32menuCode.mapOfGDgdjs_46main_9532menuCode_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if (gdjs.main_32menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "credits", false);
}}

}


};

gdjs.main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main_32menuCode.GDStart_95Objects1.length = 0;
gdjs.main_32menuCode.GDStart_95Objects2.length = 0;
gdjs.main_32menuCode.GDNewObjectObjects1.length = 0;
gdjs.main_32menuCode.GDNewObjectObjects2.length = 0;
gdjs.main_32menuCode.GDNewObject3Objects1.length = 0;
gdjs.main_32menuCode.GDNewObject3Objects2.length = 0;
gdjs.main_32menuCode.GDNewObject2Objects1.length = 0;
gdjs.main_32menuCode.GDNewObject2Objects2.length = 0;
gdjs.main_32menuCode.GDexitObjects1.length = 0;
gdjs.main_32menuCode.GDexitObjects2.length = 0;
gdjs.main_32menuCode.GDNewObject4Objects1.length = 0;
gdjs.main_32menuCode.GDNewObject4Objects2.length = 0;
gdjs.main_32menuCode.GDStart_952Objects1.length = 0;
gdjs.main_32menuCode.GDStart_952Objects2.length = 0;
gdjs.main_32menuCode.GDNewObject5Objects1.length = 0;
gdjs.main_32menuCode.GDNewObject5Objects2.length = 0;
gdjs.main_32menuCode.GDNewObject6Objects1.length = 0;
gdjs.main_32menuCode.GDNewObject6Objects2.length = 0;

gdjs.main_32menuCode.eventsList0(runtimeScene);
return;

}

gdjs['main_32menuCode'] = gdjs.main_32menuCode;
