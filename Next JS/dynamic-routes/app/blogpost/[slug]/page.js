import NotFound from "@/app/components/NotFound"

export default function Page({ params }) {
  let lang = ["python", "javascript", "c", "cpp", "ruby", "react"]
  if (lang.includes(params.slug)) {
    return <div>My Post: {params.slug}</div>
  }
  else{
    return <div><NotFound/></div>
  }
}