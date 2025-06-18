import { NextRequest, NextResponse } from "next/server";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebaseClient";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    console.log("Data dikirim:", { name, email, password });

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, { displayName: name });

    await setDoc(doc(db, "users", userCredential.user.uid), {
      name,
      email,
      role: "teacher",
    });

    return NextResponse.json({ message: "Register sukses" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}