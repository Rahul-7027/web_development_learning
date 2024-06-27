import './App.css';
import { useForm } from "react-hook-form"


function App() {
  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
  } = useForm()

  // const delay = (d) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve()
  //     }, d * 1000);
  //   })
  // }

  const onSubmit = async (data) => {
    try {
      let response = await fetch("http://localhost:2002/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      let responseData = await response.text(); // or response.json() if the response is JSON
      console.log(data, responseData);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  
  return (
    <div className="App">
      {isSubmitting && <div>Loading... </div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} placeholder='username' type="text" name="name" id="" /><br /> <br />
        <input {...register("password", { required: true, minLength: { value: 5, message: "Password is less than 5 character" }, maxLength: { value: 20, message: "Password is greater than 20 characters" } })} placeholder='password' type="password" name="password" id="" /> <br /> <br />
        {errors.password && <span>{errors.password.message}</span>}
        <input type="submit" disabled={isSubmitting} value="Submit" />
      </form>
    </div>
  );
}

export default App;
