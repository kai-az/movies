import './about-film.css';
import { useState } from 'react';
import { API } from '../../consts';

export const AboutFilm = ({ item }) => {
    const [currentTab, setCurrentTab] = useState('details');

    const movieDetails = [
        {
            title: 'Status',
            value: 'Released',
        },
        {
            title: 'Release Date',
            value: item.release_date,
        },
        {
            title: 'Original Title',
            value: item.original_title,
        },
        {
            title: 'Original Language',
            value: item.original_language,
        },
    ];

    const detailsList = (
        <ul className="details--list">
          {movieDetails.map((detail, index) => (
            <li className="details--item" key={index}>
              <div>{detail.title}</div>
              <div>{detail.value}</div>
            </li>
          ))}
        </ul>
      );

    const tabs = [
        { id: 'details', title: 'Детали', content: detailsList },
        { id: 'video', title: 'Видео', content: 'Tab 2 content' },
        { id: 'actors', title: 'Актеры', content: 'Tab 3 content' },
    ];

    const styles = {
        aboutTopBg: {
            backgroundImage: `url(${API.postersUrl}${item.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            position: 'absolute',
            zIndex: 1,
            transform: 'scale(-1, 1)',
        },
  };

  const handleTabClick = (id) => {
      setCurrentTab(id)
  }

    return (
        <div className="about-film">
            <div className="about--top">
                <div className="about--backdrop">
                    <div style={styles.aboutTopBg}>
                        <div className="about--overlay"></div>
                    </div>
                </div>
                <div className="about--topinfo container">
                    <div className="about--poster">
                        <img
                            src={`${API.postersUrl}${item.poster_path}`}
                            alt={`обложка фильма ${item.title}`}
                        />
                    </div>
                    <div className="about-description">
                        <h2 className="about--title">{item.title}.</h2>
                        <div className="about--rating">
                            Рейтинг: {item.vote_average}
                        </div>
                        <p className="about--text">{item.overview}</p>
                    </div>
                </div>
            </div>
            <div className="about--bottom">
                <div className="container">
                    <div className="about--details">
                        <ul className="about--tabs">
                          {tabs.map((tab, index) => (
                            <li
                              key={index}
                              className={`tab ${currentTab === tab.id ? 'active' : ''}`}
                              onClick={() => handleTabClick(tab.id)}
                            >
                              <a className='about--tabslink'>{tab.title}</a>
                            </li>
                          ))}
                        </ul>
                        <div>
                          {tabs.find((tab) => tab.id === currentTab).content}
                        </div>
                    </div>
                    <div className="about--video"></div>
                    <div className="about--actors"></div>
                </div>
            </div>
        </div>
    );
};
