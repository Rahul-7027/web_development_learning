const { NextResponse } = require("next/server");

export async function POST(request){
    let req=await request.json();
    console.log(req)
    return NextResponse.json({success:true,data:req})
}
// export async function PUT(request){
//     return NextResponse.json({success:true,data:"yes"})
// }
// export async function DELETE(request){
//     return NextResponse.json({success:true,data:"yes"})
// }
// export async function GET(request){
//     return NextResponse.json({success:true,data:"yes"})
// }