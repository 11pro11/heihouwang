var gangRoleShow = false
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
