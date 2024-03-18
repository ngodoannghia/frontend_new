import React, {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import { uploadSong, apiGetAllCountry, apiGetAllSinger, apiGetAllCategory, apiGetAllPlaylist, apiGetAllAlbum } from "../../services/ApiService"
import Select from 'react-select'


function UploadMusic(props) {
    var [fileDemo, setFileDemo] = useState(null)
    var [fileOffical, setFileOffical] = useState(null)
    var [fileLyric, setFileLyric] = useState(null)
    var [title, setTitle] = useState({})
    var [description, setDescription] = useState({})
    var [packId, setPackId] = useState(1)
    var [albumId, setAlbumId] = useState(1)
    var [countryId, setCountryId] = useState(1)
    var [singersId, setSingerId] = useState(1)
    var [categorieId, setCategoryId] = useState(1)
    var [playlistId, setPlaylistId] = useState(1)

    var [optionSinger, setOptionSinger] = useState([])
    var [optionsCategory, setOptionCategory] = useState({})
    var [optionsCountry, setOptionCountry] = useState({})
    var [optionAlbum, setOptionAlbum] = useState({})
    var [optionPlaylist, setOptionPlaylist] = useState({})

    const handleSingerChange = (selectedOptions) => {
        setSingerId(selectedOptions);
    };

    const handleCategoryChange = (selectedOptions) => {
        setCategoryId(selectedOptions.value);
        // Do something with the selected value
    };
    const handleCountryChange = (selectedOptions) => {
        setCountryId(selectedOptions.value);
        // Do something with the selected value
    };
    const handleAlbumChange = (selectedOptions) => {
        setAlbumId(selectedOptions.value);
    }
    const handlePlaylistChange = (selectedOptions) => {
        setPlaylistId(selectedOptions.value);
    }

    useEffect(()=>{
        var tmpCategory = []
        var tmpCountry = []
        var tmpSinger = []
        var tmpPlaylist = []
        var tmpAlbum = []

        apiGetAllCategory().then((data) => {
            data.forEach(item => {
                tmpCategory.push({value: item.category_id, label: item.name})
            })
        })
        apiGetAllCountry().then((data) => {
            data.forEach(item => {
                tmpCountry.push({value: item.country_id, label: item.name})
            })
        })
        apiGetAllSinger().then((data) => {
            data.forEach(item => {
                tmpSinger.push({value: item.singer_id, label: item.name})
            })
        })
        apiGetAllPlaylist().then((data) => {
            data.forEach(item => {
                tmpPlaylist.push({value: item.playlist_id, label: item.name})
            })
        })
        apiGetAllAlbum().then((data) => {
            data.forEach(item => {
                tmpAlbum.push({value: item.album_id, label: item.name})
            })
        })
        setOptionCategory(tmpCategory)
        setOptionCountry(tmpCountry)
        setOptionSinger(tmpSinger)
        setOptionAlbum(tmpAlbum)
        setOptionPlaylist(tmpPlaylist)
    }, [])

    const formData = new FormData()

    function onChangeDemo(event){
        var file = event.target.files[0]
        console.log("Vao demo")
        setFileDemo(file)
    }
    function onChangeOffical(event){
        var file = event.target.files[0]
        console.log("Vao offical")
        setFileOffical(file)
    }
    function onChangeLyric(event){
        var file = event.target.files[0]
        setFileLyric(file)
    }

    function handleUpload(){
        console.log("Hand upload")
        formData.append('file_lyric', fileLyric)
        console.log(fileLyric)
        formData.append('file_demo', fileDemo)
        formData.append('file_offical', fileOffical)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('pack_id', packId)
        formData.append('album_id', albumId)
        formData.append('country_id', countryId)
        formData.append('playlist_id', playlistId)
        formData.append('category_id', categorieId)
        singersId.forEach((singer, index) => {
            formData.append('singer_id', singer.value);
        });
        
        try{
            uploadSong(formData).then((data) => {
                window.showAlert("Upload nhạc thanh công !")
                props.history.push('/music')
            }).catch(e => {
                window.showAlert("Upload nhạc thất bại")
                console.log(e)
            })
        }
        catch{
            window.showAlert("Có lỗi thông tin upload!")
        }
    }

    return (
        <div className="main-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">Components</div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="#"><i className="bx bx-home-alt"></i></a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Starter Page</li>
                        </ol>
                    </nav>
                </div>
                <div className="ms-auto">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary">Settings</button>
                        <button type="button" className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                            <a className="dropdown-item" href="#">Other</a>
                            <div className="dropdown-divider"></div>	<a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-4">
                                <h5 className="mb-3">Song Title</h5>
                                <input onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" placeholder="write title here...." />
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Song Description</h5>
                                <textarea onChange={(e)=>setDescription(e.target.value)}  className="form-control" cols="4" rows="6" placeholder="write a description here.."></textarea>
                            </div>
                            
                            <div className="mb-3">
                                <h5 className="mb-3">Upload Lyris</h5>                              
                                <input onChange={onChangeLyric} type="file" name="files" accept=".text, .doc, .docx, .txt"/>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Upload Song Demo</h5>
                                <input onChange={onChangeDemo} type="file" name="files" accept=".mp3, .wav, .wma, .flac, .aac, .ogg"/>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Upload Song Offical</h5>
                                <input onChange={onChangeOffical} type="file" name="files" accept=".mp3, .wav, .wma, .flac, .aac, .ogg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-3">
                                <button type="button" className="btn btn-outline-danger flex-fill"><i className="bi bi-x-circle me-2"></i>Discard</button >
                                <button type="button" className="btn btn-outline-success flex-fill"><i className="bi bi-cloud-download me-2"></i>Save Draft</button>
                                <button type="button" className="btn btn-outline-primary flex-fill"><i className="bi bi-send me-2"></i>Publish</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="mb-3">Organize</h5>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="AddPackage" className="form-label">Package</label>
                                    <select onChange={(e)=>setPackId(e.target.value)} className="form-select" id="AddPackage">
                                        <option value="1">Normal</option>
                                        <option value="2">Vip</option>
                                        <option value="3">Super Vip</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Country" className="form-label">Country</label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={optionsCountry[0]}
                                        name="color"
                                        options={optionsCountry}
                                        onChange={handleCountryChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Category" className="form-label">Category</label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={optionsCategory[0]}
                                        name="color"
                                        options={optionsCategory}
                                        onChange={handleCategoryChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Album" className="form-label">Album</label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={optionAlbum[0]}
                                        name="color"
                                        options={optionAlbum}
                                        onChange={handleAlbumChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Playlist" className="form-label">Playlist</label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={optionPlaylist[0]}
                                        name="color"
                                        options={optionPlaylist}
                                        onChange={handlePlaylistChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="multiple-select-field" className="form-label">Singer</label>
                                    <Select
                                        isMulti
                                        name="colors"
                                        options={optionSinger}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={handleSingerChange}
                                    />
								</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="d-grid">
                                        <button onClick={handleUpload} type="button" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
}
export default withRouter(UploadMusic);