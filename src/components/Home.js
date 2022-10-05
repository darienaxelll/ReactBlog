import {useState} from "react";
import BlogList from './BlogList'
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', author: 'mario', id: 1},
        {title: 'My new website', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', author: 'mario', id: 2},
        {title: 'My new website', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', author: 'mario', id: 3},
        {title: 'My new website', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', author: 'mario', id: 4}
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All blogs!'/>
        </div>
    );
}

export default Home;