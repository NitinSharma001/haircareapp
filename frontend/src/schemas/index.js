import  * as Yup from "yup";


export const deliverySchema = Yup.object({
    name:Yup.string().min(4).max(25).required("please enter your name"),
    street:Yup.string().min(10).max(30).required("please enter your street"),
    city:Yup.string().min(5).max(25).required("please enter your city"),
    state:Yup.string().min(4).max(25).required("please enter your state"),
    zip:Yup.number().min(100000).max(1000000).required("please enter your zip code"),
    country:Yup.string().min(4).max(25).required("please enter your country"),
    mobile:Yup.number().min(1000000000).max(10000000000).required("please enter your moblile number"),

    email:Yup.string().email().required("please enter your email")
     

})