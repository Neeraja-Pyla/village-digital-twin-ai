return (

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-lg h-full">

<h2 className="text-xl font-bold text-white">
Village Risk Score
</h2>

<div className="mt-8 flex justify-center">

<div
className={`
w-36 h-36 rounded-full
flex items-center justify-center
text-5xl font-bold
border-8
${
village.risk>=80
? "border-red-500 text-red-400"
: village.risk>=60
? "border-yellow-400 text-yellow-400"
: "border-green-500 text-green-400"
}
`}
>

{village.risk}

</div>

</div>

<p className="text-center mt-6 text-xl font-semibold">

{
village.risk>=80
? "🔴 Critical Risk"
: village.risk>=60
? "🟡 Moderate Risk"
: "🟢 Low Risk"
}

</p>

</div>

);