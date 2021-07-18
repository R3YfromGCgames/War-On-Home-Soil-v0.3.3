gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32sceneCode.GDNewObject2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32sceneCode.GDNewObject3Objects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lvl 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32sceneCode.GDNewObject3Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
