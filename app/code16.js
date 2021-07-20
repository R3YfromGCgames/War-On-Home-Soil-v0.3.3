gdjs.OPtionsCode = {};
gdjs.OPtionsCode.GDNewObject5Objects1= [];
gdjs.OPtionsCode.GDNewObject5Objects2= [];
gdjs.OPtionsCode.GDoptionObjects1= [];
gdjs.OPtionsCode.GDoptionObjects2= [];
gdjs.OPtionsCode.GDres4kObjects1= [];
gdjs.OPtionsCode.GDres4kObjects2= [];
gdjs.OPtionsCode.GDNewObjectObjects1= [];
gdjs.OPtionsCode.GDNewObjectObjects2= [];
gdjs.OPtionsCode.GDNewObject2Objects1= [];
gdjs.OPtionsCode.GDNewObject2Objects2= [];
gdjs.OPtionsCode.GDNewObject3Objects1= [];
gdjs.OPtionsCode.GDNewObject3Objects2= [];
gdjs.OPtionsCode.GDNewObject4Objects1= [];
gdjs.OPtionsCode.GDNewObject4Objects2= [];

gdjs.OPtionsCode.conditionTrue_0 = {val:false};
gdjs.OPtionsCode.condition0IsTrue_0 = {val:false};
gdjs.OPtionsCode.condition1IsTrue_0 = {val:false};


gdjs.OPtionsCode.mapOfGDgdjs_46OPtionsCode_46GDoptionObjects1Objects = Hashtable.newFrom({"option": gdjs.OPtionsCode.GDoptionObjects1});gdjs.OPtionsCode.mapOfGDgdjs_46OPtionsCode_46GDres4kObjects1Objects = Hashtable.newFrom({"res4k": gdjs.OPtionsCode.GDres4kObjects1});gdjs.OPtionsCode.mapOfGDgdjs_46OPtionsCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.OPtionsCode.GDNewObject3Objects1});gdjs.OPtionsCode.mapOfGDgdjs_46OPtionsCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.OPtionsCode.GDNewObjectObjects1});gdjs.OPtionsCode.mapOfGDgdjs_46OPtionsCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.OPtionsCode.GDNewObject4Objects1});gdjs.OPtionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("option"), gdjs.OPtionsCode.GDoptionObjects1);

gdjs.OPtionsCode.condition0IsTrue_0.val = false;
{
gdjs.OPtionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OPtionsCode.mapOfGDgdjs_46OPtionsCode_46GDoptionObjects1Objects, runtimeScene, true, false);
}if (gdjs.OPtionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 800, 600);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{firebase.analytics();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("res4k"), gdjs.OPtionsCode.GDres4kObjects1);

gdjs.OPtionsCode.condition0IsTrue_0.val = false;
{
gdjs.OPtionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OPtionsCode.mapOfGDgdjs_46OPtionsCode_46GDres4kObjects1Objects, runtimeScene, true, false);
}if (gdjs.OPtionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 4096, 2160);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}{firebase.analytics();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.OPtionsCode.GDNewObject3Objects1);

gdjs.OPtionsCode.condition0IsTrue_0.val = false;
{
gdjs.OPtionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OPtionsCode.mapOfGDgdjs_46OPtionsCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.OPtionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1400, 900);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}{firebase.analytics();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.OPtionsCode.GDNewObjectObjects1);

gdjs.OPtionsCode.condition0IsTrue_0.val = false;
{
gdjs.OPtionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OPtionsCode.mapOfGDgdjs_46OPtionsCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.OPtionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.OPtionsCode.GDNewObject4Objects1);

gdjs.OPtionsCode.condition0IsTrue_0.val = false;
{
gdjs.OPtionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OPtionsCode.mapOfGDgdjs_46OPtionsCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if (gdjs.OPtionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};

gdjs.OPtionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OPtionsCode.GDNewObject5Objects1.length = 0;
gdjs.OPtionsCode.GDNewObject5Objects2.length = 0;
gdjs.OPtionsCode.GDoptionObjects1.length = 0;
gdjs.OPtionsCode.GDoptionObjects2.length = 0;
gdjs.OPtionsCode.GDres4kObjects1.length = 0;
gdjs.OPtionsCode.GDres4kObjects2.length = 0;
gdjs.OPtionsCode.GDNewObjectObjects1.length = 0;
gdjs.OPtionsCode.GDNewObjectObjects2.length = 0;
gdjs.OPtionsCode.GDNewObject2Objects1.length = 0;
gdjs.OPtionsCode.GDNewObject2Objects2.length = 0;
gdjs.OPtionsCode.GDNewObject3Objects1.length = 0;
gdjs.OPtionsCode.GDNewObject3Objects2.length = 0;
gdjs.OPtionsCode.GDNewObject4Objects1.length = 0;
gdjs.OPtionsCode.GDNewObject4Objects2.length = 0;

gdjs.OPtionsCode.eventsList0(runtimeScene);
return;

}

gdjs['OPtionsCode'] = gdjs.OPtionsCode;
