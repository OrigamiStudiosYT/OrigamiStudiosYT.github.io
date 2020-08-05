// @ts-check

/* ******************************************************************************
    *
    *   Program: Java.js
    *
    *   Description: Handles the Javascript for the page
    *
    *   Author:   Andrew Lortie
    *
    *   Date: 8/5/2020                                                          
    *                                                                            
    *   History: 8/5/2020 Creation  
    *
    ****************************************************************************** 
*/

/* ******************************************************************************
    *
    *   Function: copyRight
    *
    *   Description: Makes a copyright mark and tells the time since the website
    *                was last updated
    *
    *   Author:   Andrew Lortie
    *
    *   Date: 8/5/2020                                                          
    *                                                                            
    *   History: 8/5/2020 Creation  
    *
    ****************************************************************************** 
*/

function copyRight() 
{
    var lastModDate = document.lastModified;
    var lastModDate = lastModDate.substring(0, 10);

    // @ts-ignore
    displayCopyRight.innerHTML = "<span style='font-size:100%; color: black;'>Author Andrew L. This website was last modified " + lastModDate + ". </span>";
}