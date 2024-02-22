var ruleCheerAnthem = 0
var gangRoleShow = false
var gangSoupRecipeShow = false
function gangRuleCheerAnthem() {
    console.log('ruleCheerAnthem activated')
    if (ruleCheerAnthem === 0) {
        document.getElementById('gangRule').style.display = 'none';
        document.getElementById('gangCheer').style.display = 'inline';
        ruleCheerAnthem = 1;
        console.log('ruleCHEERanthem')
    }
    else if (ruleCheerAnthem === 1) {
        document.getElementById('gangCheer').style.display = 'none';
        document.getElementById('gangAnthem').style.display = 'inline';
        ruleCheerAnthem = 2;
        console.log('rulecheerANTHEM')
    }
    else{
        document.getElementById('gangAnthem').style.display = 'none';
        document.getElementById('gangRule').style.display = 'inline';
        ruleCheerAnthem = 0;
        console.log('RULEcheeranthem')
    }
}
function showGangRoles() {
    console.log('showGangRoles activated')
    if (gangRoleShow === false) {
        document.getElementById('gangSign').style.display = 'none';
        document.getElementById('gangRole').style.display = 'inline';
        gangRoleShow = true;
        console.log('gangrole has been shown')
    }
    else {
        document.getElementById('gangSign').style.display = 'inline';
        document.getElementById('gangRole').style.display = 'none';
        gangRoleShow = false;
        console.log('gangrole has been hidden')
    }
}
function heihoutangrecipe() {
    console.log('recipe function activated')
    if (gangSoupRecipeShow === false) {
        document.getElementById('recipe').style.display = 'inline';
        console.log('recipe shown');
        gangSoupRecipeShow = true;
    }
    else {
        document.getElementById('recipe').style.display = 'none';
        console.log('recipe hidden');
        gangSoupRecipeShow = false;
    }
}