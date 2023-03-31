import { auth, firebase } from "../firebase";

export const registerUserWithFirebase = (firstName, lastName, email, password) => {

    console.log("inside registerUserWithFirebase")
    console.log("firstName: ", firstName)
    console.log("lastName: ", lastName)
    console.log("email: ", email)
    console.log("password", password)

    auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user
                .updateProfile({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                })
                .then(() => {
                    firebase
                        .firestore()
                        .collection('users')
                        .doc(firebase.auth().currentUser.uid)
                        .set({
                            firstName,
                            lastName,
                            email
                        })
                })
                // .then(() => {
                //     firebase
                //         .auth()
                //         .currentUser.sendEmailVerification({
                //             handleCodeInApp: true,
                //             url: "tinderdatingapp-8795d.firebaseapp.com",
                //         })
                //         .then(() => {
                //             console.log("Email verification sent")
                //             alert("Verification email sent. Please check your email and verify your account.")
                //         })
                //         .catch((error) => {
                //             console.log("Email verification error: ", error)
                //         })
                // })
        })
        .catch((error) => alert("Issue with registration. Please try again.", error))

}