import { BrowserRouter, Routes, Route, Outlet, useNavigate, Link} from "react-router-dom"
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
import Item from "./component/context/subcomponent/items"
import ThemeProvider from "./component/context/themeProvider"
import CartProvider from "./component/context/card-context/cartProvider"
import Fragment from "./component/fragment/fragment"
import Ref from "./component/Ref/ref"
import RefComplex from "./component/Ref/refComplex"
import CounterClass from "./component/class/class-counter"
import Performance from "./component/performance-optimisation/performance"
import MemoValue from "./component/memo-example/memo-value"
import CatFact from "./component/cat-fact/cat-fact"
import Navigation from "./component/navigation/navigation"
import IndexComponent from "./component/index/index-comp"
import Registration from "./component/auth/registration"
import Login from "./component/auth/login"

const App = () => {
    const navigate = useNavigate()
    return (
        <div>
             {/* <Welcome/>
             <Hello/> */}
             {/* <Home/> */}
             {/* <Counter/> */}
             {/* <Event/>
             <Form/> */}
             {/* <Calculator/> */}
             {/* <Iteration/> */}
             {/* <Practice/> */}
             {/* <Practise2/> */}
             {/* <SideEffect/> */}
             {/* <SideEffectPractise/> */}
             {/* <PredictAge/> */}
             {/* <Validation/> */}
             {/* <UseReducer/> */}
             {/* <ThemeProvider/> */}
             {/* <CartProvider/> */}
             {/* <Fragment/> */}
             {/* <Ref/> */}
             {/* <RefComplex/> */}
             {/* <CounterClass/> */}
             {/* <Performance/> */}
             {/* <MemoValue/> */}
             {/* <CatFact/> */}
             {/* <Navigation/> */}
             
             <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="index" element={<IndexComponent/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="Calculator" element={<Calculator/>}/>
                    <Route path="form" element={<Form/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="*" element={<div>
                        Page Not Found 404!
                    </div>}/>
                    <Route path="age" element={<><div ><Link to="/age/1">Predict</Link></div><Outlet/></>}>
                        <Route path=":id" element={<PredictAge/>}></Route>
                    </Route> 
                </Routes>
             </BrowserRouter>
        </div>
        
    )
}
export default App