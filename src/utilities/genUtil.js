module.exports = {
    // Helper functions

    /*
     * Use to verfiy password at registration meets criteria
     * 
     */

     verifyPW(pw, confirmPW) {
         if(pw !== confirmPW) {
             return false;
         }

         if(confirmPW.length < 8 || confirmPW.length > 25) {
             return false;
         }

         return true;
     }
}