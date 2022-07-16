import { CommandView } from "../../../../../ui/command-view";

export const quickStartDoc = <div>
    <h1 class="title-text">რა არის KIX?</h1>
    <p class="description-text ">
        KIX არის javascript ის ბიბლიოთეკა რომელიც ფოკუსირებულია კოდის სიმარტივესა და სისწრაფერზე
        ის საშუალებას აძლევს მომხმარებელს შექმნას დინამური და მაღალი კომპლექსური პროექტი მაქსიმალურად მარტივი და სწარაფად რენდერირებადი კომპონენტებით
    </p>
    <br />
    <h4>
        <a href="https://nodejs.org/" class="url" target="_blank"> აპლიკაციიის გასაშვებად აუცილებელია დაყნებული გქონდეთ Node.JS აპლიკაცია </a>
    </h4>
    <br />
    <p> KIX ის დასაინსტალირებლად გახსენით ბრძანების ფანჯარა და ჩაწერეთ შემდეგი კომანდი:</p>
    <CommandView command="npm i -g kix" />
    <br />
    <p> ახალი სამუშაო გარემოს შესაქმნელად გაუშვით შემდეგი ბრძანება, "app-name" მაგივრად მიუთითეთ აპლიკაციის დასახელება:</p>
    <CommandView command="kix new app-name" />
    <br />
    <p>აპლიკაციაში შესასველად გაუშვით შემდეგი ბრძანება: </p>
    <CommandView command="cd app-name" />
    <br />
    <p>აპლიკაციის გასაშვებად გამოიყენეთ შემდეგი ბრძანება: </p>
    <CommandView command="kix start" />
</div>