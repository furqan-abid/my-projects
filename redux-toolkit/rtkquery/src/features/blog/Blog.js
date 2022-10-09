import React,{useState} from 'react'
import { useAddBlogsMutation,useGetBlogsQuery } from '../api/apiSlice'


export const Blog = () => {

    const {
        data:blog,
        isLoading,
        isSuccess,
        isError,
        error
    }=useGetBlogsQuery()


    const[addBlog]=useAddBlogsMutation()

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [file, setfile] = useState('')

    const onTitleChanged = (e) => { 
        settitle(e.target.value)
    }
    const onDescriptionChanged = (e) => { 
        setdescription(e.target.value)
    }

    const onFileChanged = (e) => {
        setfile(e.target.files[0])
    }

    const onSavePostClicked=()=>{
        let data=new FormData();
        data.append("photo",file);
        data.append("title",title);
        data.append("description",description);
        addBlog(data);
    }

  return (
    <div>

        {
            isLoading?
            <div>loading</div>:
            isSuccess?
            <div>
                {
                    blog.blog.map((ls)=>(
                        <div>
                            {ls.title} <br />
                            {ls.description} <br />
                            <img src={ls.image} alt="img" />
                        </div>
                    ))
                }
            </div>:
            isError?
            <div>{error}</div>:null
        }
        <div>
        <form action="" >
            <label htmlFor="posttitle">post title</label>
            <input type="text" name="title" id="title" value={title} onChange={onTitleChanged}/>
            <label htmlFor="description">post description</label>
            <input type="text" name="description" id="description" value={description} onChange={onDescriptionChanged}/>
            <input type="file" name="file" id="file" onChange={onFileChanged}/>
            <button type="button" onClick={onSavePostClicked}>change</button>
        </form>
        </div>
    </div>
  )
}
