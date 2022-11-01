import  * as Yup from "yup";


export const CardSchema = Yup.object({
   
   

    CardName: Yup.string().max(25).required('please enter your CardName'),
    CardNumber: Yup.number().required('please enter your CardNumber'),
    Year: Yup.number().required('please enter Year'),
    Month: Yup.number().required('please enter Month'),
        CVV: Yup.number().required('please enter CVV'),
        Number:Yup.number().required("please enter your moblile number"),

        Email:Yup.string().email().required("please enter your email"),





     

})