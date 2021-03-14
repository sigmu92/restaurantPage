import {pageLoad} from './pageLoad'
import {loadContact, loadMenu} from './tabContent'

pageLoad()
document.querySelector("#Contact").addEventListener("click", loadContact)
document.querySelector("#Menu").addEventListener("click", loadMenu)