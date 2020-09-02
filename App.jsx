import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function creatCard(contact) {
    return <Card
        key={contact.name}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
    />
}

function App() {
  return (
    <div>
          <h1 className="heading">My Contacts</h1>
          <Avatar
              img= "https://scontent.fccu4-1.fna.fbcdn.net/v/t1.0-9/54433166_331688350815237_3164743323457945600_n.jpg?_nc_cat=104&_nc_sid=174925&_nc_ohc=yI63MZUVTDsAX95f7vk&_nc_ht=scontent.fccu4-1.fna&oh=9704539b6c704f8e2e6dc0f37e0250f4&oe=5F74F5A9"
          />
          {contacts.map(creatCard)}
          

    </div>
  );
}

export default App;
