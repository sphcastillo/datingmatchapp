// import { auth, db, firebase } 

const registerUser = async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log("rq.body: ", req.body)

    try {
        const userAuth = await auth.createUserWithEmailAndPassword(email, password);

        await userAuth.user.updateProfile({
            firstName: firstName,
            lastName: lastName,
            email: email,
            displayName: firstName
        })

        const payload = {
            firstName, 
            lastName,
            email,
            displayName: firstName,
            uid: firebase.auth().currentUser.uid,
        };

        await firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
                ...payload,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                
            })
            
    } catch(error){
        console.log("User signup error: ", error)
        res.status(500).json({ message: "User signup error"});
    }
}

const loginUser = async(req, res) => {
    const { email, password } = req.body;
    console.log("rq.body: ", req.body)

    try {
        const userAuth = await auth.signInWithEmailAndPassword(email, password);

        await firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((doc) => {
                if(doc.exists){
                    console.log("doc.data(): ", doc.data())
                    console.log("User found")
                }
                else {
                    console.log("User not found")
                }
            })
            res.status(200).json({ message: "User found"})
    }catch(error){
        console.log("error: ", error)
        res.status(500).json({ message: "User not found"})
    }
}

export default loginUser;