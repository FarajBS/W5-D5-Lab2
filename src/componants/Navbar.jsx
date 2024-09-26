import './Nav.css'

export default function Navbar() {
  return (
    <div>
        <div className='hearder'>
            <img src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=/&userId=&cache=v2" className="w-screen logo" alt="" />
            <div className='titles'>
                <h3 className='text-white text-5xl my-8 py-3 font-light'>FreshGoods</h3>
                <h1 className='text-white text-7xl font-bold'>Concisely</h1>
                <h1 className='text-white text-7xl  font-bold'>describe your</h1>
                <h1 className='text-white text-7xl my-10 font-bold'>product or service</h1>
                <p className='text-white mb-14 py-3 font-bold'>No need to get clear, Tell people exaclty what your offering the use this space to communicate your key value propsition</p>

                <button className='bg-yellow-400 text-black px-10 py-3 font-bold'>Order Now</button>
            </div>
        </div>


        <div className='container mx-auto w-1/2 text-center mt-36'>
            <h2 className='text-6xl'>Here are some of the benefits of Your offer</h2>
            <p className='text-black mt-14 font-light text-2xl'>Explain what makes your product or service great. Talk about features in a way that highlights the real value people get out of them.
            </p>
        </div>


        <div className="grid grid-col-3 grid-flow-col gap-4 container mx-auto my-28">
            <div className='text-center cloumn flex flex-col place-items-center'>
                <div>
                    <img src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fe1e4f38a-a958-4b5d-bcb0-eddce8b433c0%2FUntitled.png?table=block&id=fff185a2-dff1-818a-9e69-c9f78f78f9f7&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=120&userId=&cache=v2" alt="" />
                </div>
                <h5>Benefit 1</h5>
                <p>For example, restaurants and bakeries could outline the health benefits of their all- natural ingredients.</p>
            </div>
            <div className='text-center flex flex-col place-items-center'>
                <div>
                <img src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fe1e4f38a-a958-4b5d-bcb0-eddce8b433c0%2FUntitled.png?table=block&id=fff185a2-dff1-818a-9e69-c9f78f78f9f7&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=120&userId=&cache=v2" alt="" />
                </div>
                <h5>Benefit 2</h5>
                <p>Florists and other small retailers. might use this space to describe how their products make delightful, one-of-a-kind gifts.</p>
            </div>
            <div className='text-center flex flex-col place-items-center'>
                <div>
                    <img src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fe1e4f38a-a958-4b5d-bcb0-eddce8b433c0%2FUntitled.png?table=block&id=fff185a2-dff1-818a-9e69-c9f78f78f9f7&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=120&userId=&cache=v2" alt="" />
                </div>
                <h5>Benefit 3</h5>
                <p>You could also add buttons to this section and share links to other products or available delivery methods.</p>
            </div>
        </div>




    </div>
  )
}
