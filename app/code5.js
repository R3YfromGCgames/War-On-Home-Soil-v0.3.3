gdjs.lvl_328Code = {};
gdjs.lvl_328Code.GDendObjects1= [];
gdjs.lvl_328Code.GDendObjects2= [];
gdjs.lvl_328Code.GDtankObjects1= [];
gdjs.lvl_328Code.GDtankObjects2= [];
gdjs.lvl_328Code.GDNewObjectObjects1= [];
gdjs.lvl_328Code.GDNewObjectObjects2= [];
gdjs.lvl_328Code.GDbulletObjects1= [];
gdjs.lvl_328Code.GDbulletObjects2= [];
gdjs.lvl_328Code.GDenemyplaceholderObjects1= [];
gdjs.lvl_328Code.GDenemyplaceholderObjects2= [];
gdjs.lvl_328Code.GDPixelSmokeObjects1= [];
gdjs.lvl_328Code.GDPixelSmokeObjects2= [];
gdjs.lvl_328Code.GDbarbedplaceholdrObjects1= [];
gdjs.lvl_328Code.GDbarbedplaceholdrObjects2= [];
gdjs.lvl_328Code.GDalien2Objects1= [];
gdjs.lvl_328Code.GDalien2Objects2= [];
gdjs.lvl_328Code.GDbossObjects1= [];
gdjs.lvl_328Code.GDbossObjects2= [];
gdjs.lvl_328Code.GDBulletObjects1= [];
gdjs.lvl_328Code.GDBulletObjects2= [];

gdjs.lvl_328Code.conditionTrue_0 = {val:false};
gdjs.lvl_328Code.condition0IsTrue_0 = {val:false};
gdjs.lvl_328Code.condition1IsTrue_0 = {val:false};
gdjs.lvl_328Code.condition2IsTrue_0 = {val:false};
gdjs.lvl_328Code.conditionTrue_1 = {val:false};
gdjs.lvl_328Code.condition0IsTrue_1 = {val:false};
gdjs.lvl_328Code.condition1IsTrue_1 = {val:false};
gdjs.lvl_328Code.condition2IsTrue_1 = {val:false};


gdjs.lvl_328Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_328Code.GDtankObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.lvl_328Code.GDtankObjects1.length !== 0 ? gdjs.lvl_328Code.GDtankObjects1[0] : null), true, "", 0);
}}

}


};gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDPixelSmokeObjects1Objects = Hashtable.newFrom({"PixelSmoke": gdjs.lvl_328Code.GDPixelSmokeObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_328Code.GDtankObjects1});gdjs.lvl_328Code.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("PixelSmoke"), gdjs.lvl_328Code.GDPixelSmokeObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_328Code.GDtankObjects1);

gdjs.lvl_328Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_328Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDPixelSmokeObjects1Objects, gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDtankObjects1Objects, 1000, false);
}if (gdjs.lvl_328Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_328Code.GDPixelSmokeObjects1 */
/* Reuse gdjs.lvl_328Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_328Code.GDPixelSmokeObjects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDPixelSmokeObjects1[i].addForceTowardObject((gdjs.lvl_328Code.GDtankObjects1.length !== 0 ? gdjs.lvl_328Code.GDtankObjects1[0] : null), 1000, 1);
}
}}

}


};gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.lvl_328Code.GDbulletObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.lvl_328Code.GDbulletObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDenemyplaceholderObjects1Objects = Hashtable.newFrom({"enemyplaceholder": gdjs.lvl_328Code.GDenemyplaceholderObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_328Code.GDtankObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.lvl_328Code.GDendObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_328Code.GDtankObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbarbedplaceholdrObjects1Objects = Hashtable.newFrom({"barbedplaceholdr": gdjs.lvl_328Code.GDbarbedplaceholdrObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.lvl_328Code.GDbulletObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDalien2Objects1Objects = Hashtable.newFrom({"alien2": gdjs.lvl_328Code.GDalien2Objects1});gdjs.lvl_328Code.eventsList2 = function(runtimeScene) {

};gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.lvl_328Code.GDBulletObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbossObjects1Objects = Hashtable.newFrom({"boss": gdjs.lvl_328Code.GDbossObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_328Code.GDtankObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbossObjects1Objects = Hashtable.newFrom({"boss": gdjs.lvl_328Code.GDbossObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDtankObjects1Objects = Hashtable.newFrom({"tank": gdjs.lvl_328Code.GDtankObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.lvl_328Code.GDbulletObjects1});gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbossObjects1Objects = Hashtable.newFrom({"boss": gdjs.lvl_328Code.GDbossObjects1});gdjs.lvl_328Code.eventsList3 = function(runtimeScene) {

};gdjs.lvl_328Code.eventsList4 = function(runtimeScene) {

{


gdjs.lvl_328Code.eventsList0(runtimeScene);
}


{


gdjs.lvl_328Code.eventsList1(runtimeScene);
}


{



}


{


{
}

}


{


gdjs.lvl_328Code.condition0IsTrue_0.val = false;
gdjs.lvl_328Code.condition1IsTrue_0.val = false;
{
gdjs.lvl_328Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.lvl_328Code.condition0IsTrue_0.val ) {
{
gdjs.lvl_328Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "FireRate");
}}
if (gdjs.lvl_328Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_328Code.GDtankObjects1);
gdjs.lvl_328Code.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbulletObjects1Objects, (( gdjs.lvl_328Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_328Code.GDtankObjects1[0].getPointX("Canon")), (( gdjs.lvl_328Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_328Code.GDtankObjects1[0].getPointY("Canon")), "");
}{for(var i = 0, len = gdjs.lvl_328Code.GDbulletObjects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDbulletObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 600, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.lvl_328Code.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemyplaceholder"), gdjs.lvl_328Code.GDenemyplaceholderObjects1);

gdjs.lvl_328Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_328Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbulletObjects1Objects, gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDenemyplaceholderObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_328Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_328Code.GDenemyplaceholderObjects1 */
{for(var i = 0, len = gdjs.lvl_328Code.GDenemyplaceholderObjects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDenemyplaceholderObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.lvl_328Code.GDendObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_328Code.GDtankObjects1);

gdjs.lvl_328Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_328Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDtankObjects1Objects, gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_328Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "well done!", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("barbedplaceholdr"), gdjs.lvl_328Code.GDbarbedplaceholdrObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_328Code.GDtankObjects1);

gdjs.lvl_328Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_328Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDtankObjects1Objects, gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbarbedplaceholdrObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_328Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("alien2"), gdjs.lvl_328Code.GDalien2Objects1);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.lvl_328Code.GDbulletObjects1);

gdjs.lvl_328Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_328Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbulletObjects1Objects, gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDalien2Objects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_328Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_328Code.GDalien2Objects1 */
{for(var i = 0, len = gdjs.lvl_328Code.GDalien2Objects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDalien2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("alien2"), gdjs.lvl_328Code.GDalien2Objects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_328Code.GDtankObjects1);
{for(var i = 0, len = gdjs.lvl_328Code.GDalien2Objects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDalien2Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.lvl_328Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_328Code.GDtankObjects1[0].getPointX("")), (( gdjs.lvl_328Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_328Code.GDtankObjects1[0].getPointY("")));
}
}}

}


{


gdjs.lvl_328Code.eventsList2(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.lvl_328Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("boss"), gdjs.lvl_328Code.GDbossObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_328Code.GDtankObjects1);
{for(var i = 0, len = gdjs.lvl_328Code.GDbossObjects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDbossObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.lvl_328Code.GDbossObjects1[i].getPointX("")), (gdjs.lvl_328Code.GDbossObjects1[i].getPointY("")), gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDBulletObjects1Objects, (( gdjs.lvl_328Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_328Code.GDtankObjects1[0].getPointX("")), (( gdjs.lvl_328Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_328Code.GDtankObjects1[0].getPointY("")), 150, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boss"), gdjs.lvl_328Code.GDbossObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_328Code.GDtankObjects1);

gdjs.lvl_328Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_328Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbossObjects1Objects, gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDtankObjects1Objects, false, runtimeScene, false);
}if (gdjs.lvl_328Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_328Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_328Code.GDtankObjects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDtankObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boss"), gdjs.lvl_328Code.GDbossObjects1);
gdjs.copyArray(runtimeScene.getObjects("tank"), gdjs.lvl_328Code.GDtankObjects1);

gdjs.lvl_328Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_328Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbossObjects1Objects, gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDtankObjects1Objects, 1000, false);
}if (gdjs.lvl_328Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_328Code.GDbossObjects1 */
/* Reuse gdjs.lvl_328Code.GDtankObjects1 */
{for(var i = 0, len = gdjs.lvl_328Code.GDbossObjects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDbossObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.lvl_328Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_328Code.GDtankObjects1[0].getPointX("")), (( gdjs.lvl_328Code.GDtankObjects1.length === 0 ) ? 0 :gdjs.lvl_328Code.GDtankObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boss"), gdjs.lvl_328Code.GDbossObjects1);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.lvl_328Code.GDbulletObjects1);

gdjs.lvl_328Code.condition0IsTrue_0.val = false;
gdjs.lvl_328Code.condition1IsTrue_0.val = false;
{
gdjs.lvl_328Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbulletObjects1Objects, gdjs.lvl_328Code.mapOfGDgdjs_46lvl_95328Code_46GDbossObjects1Objects, false, runtimeScene, false);
}if ( gdjs.lvl_328Code.condition0IsTrue_0.val ) {
{
{gdjs.lvl_328Code.conditionTrue_1 = gdjs.lvl_328Code.condition1IsTrue_0;
gdjs.lvl_328Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11462876);
}
}}
if (gdjs.lvl_328Code.condition1IsTrue_0.val) {
/* Reuse gdjs.lvl_328Code.GDbossObjects1 */
/* Reuse gdjs.lvl_328Code.GDbulletObjects1 */
{for(var i = 0, len = gdjs.lvl_328Code.GDbulletObjects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDbulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.lvl_328Code.GDbossObjects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDbossObjects1[i].returnVariable(gdjs.lvl_328Code.GDbossObjects1[i].getVariables().get("health")).sub(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boss"), gdjs.lvl_328Code.GDbossObjects1);

gdjs.lvl_328Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.lvl_328Code.GDbossObjects1.length;i<l;++i) {
    if ( gdjs.lvl_328Code.GDbossObjects1[i].getVariableNumber(gdjs.lvl_328Code.GDbossObjects1[i].getVariables().get("health")) == 0 ) {
        gdjs.lvl_328Code.condition0IsTrue_0.val = true;
        gdjs.lvl_328Code.GDbossObjects1[k] = gdjs.lvl_328Code.GDbossObjects1[i];
        ++k;
    }
}
gdjs.lvl_328Code.GDbossObjects1.length = k;}if (gdjs.lvl_328Code.condition0IsTrue_0.val) {
/* Reuse gdjs.lvl_328Code.GDbossObjects1 */
{for(var i = 0, len = gdjs.lvl_328Code.GDbossObjects1.length ;i < len;++i) {
    gdjs.lvl_328Code.GDbossObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.lvl_328Code.eventsList3(runtimeScene);
}


{


gdjs.lvl_328Code.condition0IsTrue_0.val = false;
{
gdjs.lvl_328Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.lvl_328Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", false);
}}

}


};

gdjs.lvl_328Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lvl_328Code.GDendObjects1.length = 0;
gdjs.lvl_328Code.GDendObjects2.length = 0;
gdjs.lvl_328Code.GDtankObjects1.length = 0;
gdjs.lvl_328Code.GDtankObjects2.length = 0;
gdjs.lvl_328Code.GDNewObjectObjects1.length = 0;
gdjs.lvl_328Code.GDNewObjectObjects2.length = 0;
gdjs.lvl_328Code.GDbulletObjects1.length = 0;
gdjs.lvl_328Code.GDbulletObjects2.length = 0;
gdjs.lvl_328Code.GDenemyplaceholderObjects1.length = 0;
gdjs.lvl_328Code.GDenemyplaceholderObjects2.length = 0;
gdjs.lvl_328Code.GDPixelSmokeObjects1.length = 0;
gdjs.lvl_328Code.GDPixelSmokeObjects2.length = 0;
gdjs.lvl_328Code.GDbarbedplaceholdrObjects1.length = 0;
gdjs.lvl_328Code.GDbarbedplaceholdrObjects2.length = 0;
gdjs.lvl_328Code.GDalien2Objects1.length = 0;
gdjs.lvl_328Code.GDalien2Objects2.length = 0;
gdjs.lvl_328Code.GDbossObjects1.length = 0;
gdjs.lvl_328Code.GDbossObjects2.length = 0;
gdjs.lvl_328Code.GDBulletObjects1.length = 0;
gdjs.lvl_328Code.GDBulletObjects2.length = 0;

gdjs.lvl_328Code.eventsList4(runtimeScene);
return;

}

gdjs['lvl_328Code'] = gdjs.lvl_328Code;
