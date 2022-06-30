import React, {createContext, useState} from "react";
import Header from "./Header";
import NewsFeed from "./News/NewsFeed";
import Authorization from "./Auth/Authorization";
import SearchLook from "./Search/SearchLook";
import CreateLook from "./Create/CreateLook";
import UserChat from "./Chat/UserChat";
import UserSettings from "./Settings/UserSettings";
import SavedFeed from "./Saved/SavedFeed";
import CalcSize from "./Calculator/CalcSize";
import SupportPage from "./Support/SupportPage";

export const RenderContext = createContext()



function App() {

    const [cards, setCard] = useState([
        { name: 'authorization', rendered: true, tag: <Authorization />},
        { name: 'newsFeed', rendered: false, tag: <NewsFeed /> },
        { name: 'searchLook', rendered: false, tag: <SearchLook /> },
        { name: 'createLook', rendered: false, tag: <CreateLook /> },
        { name: 'userChat', rendered: false, tag: <UserChat /> },
        { name: 'userSettings', rendered: false, tag: <UserSettings /> },
        { name: 'savedFeed', rendered: false, tag: <SavedFeed /> },
        { name: 'calcSize', rendered: false, tag: <CalcSize /> },
        { name: 'supportPage', rendered: false, tag: <SupportPage /> },
        { name: 'user', rendered: false, level: 1 },
    ])
    function cardReRender(name){
        setCard(
            cards.map(card =>{
                if (card.name === name){
                    card.rendered = true
                }
                else if (card.name === 'user'){
                    card.rendered = true
                }
                else card.rendered = false
                return card
            })
        )
    }
    function userLevel(level){
        setCard(
            cards.map(card => {
                if (card.name === 'user'){
                    card.level = level
                    return card
                }
                return card
            })
        )
        cardReRender('newsFeed')
    }

    const [lookCards, setLookCards] = useState([
        {title: '', info: '', date: '', file: '', id: 0}
    ])
    const [save, setSave] = useState([{title: '', info: '', date: '', file: '', id: 0}])

    function addToSave(id){
        const newSaveList = save
        const newSaved = lookCards.find( card => card.id === id)
        newSaveList.push(newSaved)
        setSave(newSaveList)
    }

    function removeLook(id){
        const looks = lookCards
        const lookId = looks.findIndex(look => look.id === id)
        looks.splice(lookId, 1)
        setLookCards(looks)
    }

    function addLook(body){
        const newLooksList = lookCards
        newLooksList.push(body)
        setLookCards(newLooksList)
    }

    console.log(cards)
    console.log(lookCards)


    return (
    <RenderContext.Provider value={cards}>
        <div>
            <Header cardReRender={cardReRender}/>
            <Authorization userLevel={userLevel}/>
            <NewsFeed />
            <SearchLook removeLook={removeLook} lookCards={lookCards} addToSave={addToSave}/>
            <CreateLook addLook={addLook}/>
            <UserChat />
            <UserSettings />
            <SavedFeed save={save}/>
            <CalcSize />
            <SupportPage />
        </div>
    </RenderContext.Provider>
  );
}

export default App;
