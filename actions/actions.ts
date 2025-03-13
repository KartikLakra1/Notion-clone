"use server";


import { auth } from "@clerk/nextjs/server";
import { adminDb } from "@/firebase-admin"; // Adjust the import path as necessary

export async function createNewDocument(){
    // auth().protect();

    const {sessionClaims} = await auth();

    if (!sessionClaims) {
        throw new Error("Unauthorized access"); // Restrict access if user is not authenticated
    }

    const docCollectionRef = adminDb.collection("documents");
    const docRef = await docCollectionRef.add({
        title : "New Doc"
    })

    await adminDb.collection("users").doc(sessionClaims?.email!);
}