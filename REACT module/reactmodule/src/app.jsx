import Welcome from "./welcome"
import Hello from "./hello"
import Home from "./home/home"
import Counter from "./component/counter/counter"
import Event from "./component/Event/event"
import Form from "./component/forms/form"
import Calculator from "./component/calculator/calculator"
import Iteration from "./component/iterations/iteration"
import Practice from "./component/practiceProb/practice"
import Practise2 from "./component/practiceProb/practise2"
import SideEffect from "./component/side-efect/side_efect"
import SideEffectPractise from "./component/side-efect/side_effect_prac"
import PredictAge from "./component/side-efect/pridict-age"
import Validation from "./component/form-validation/validation"
import UseReducer from "./component/use-reduce-hook/useReducer"
import Header from "./component/context/subcomponent/header"
import Footer from "./component/context/subcomponent/footer"
import Sidebar from "./component/context/subcomponent/sidebar"
import ItemInfo from "./component/context/subcomponent/item-info"
import ThemeProvider from "./component/context/themeProvider"
const App = () => {
    return (
        // <div>
        //     {/* <Welcome/>
        //     <Hello/> */}
        //     {/* <Home/> */}
        //     {/* <Counter/> */}
        //     {/* <Event/>
        //     <Form/> */}
        //     {/* <Calculator/> */}
        //     {/* <Iteration/> */}
        //     {/* <Practice/> */}
        //     {/* <Practise2/> */}
        //     {/* <SideEffect/> */}
        //     {/* <SideEffectPractise/> */}
        //     {/* <PredictAge/> */}
        //     {/* <Validation/> */}
        //     {/* <UseReducer/> */}
        // </div>
        <ThemeProvider>
            <Header/>
            <Footer/>
            <Sidebar/>
            <ItemInfo/>
        </ThemeProvider>
    )
}
export default App