interface PropsType {
    width: string
}

const InfoIcon = ({width}: PropsType) => {
    return (
        <svg width={width} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0001 18.9932C11.7788 18.9932 13.5175 18.4658 14.9964 17.4776C16.4754 16.4894 17.628 15.0849 18.3087 13.4416C18.9894 11.7983 19.1675 9.99003 18.8205 8.24551C18.4735 6.501 17.617 4.89856 16.3592 3.64083C15.1015 2.38311 13.4991 1.52659 11.7546 1.17958C10.01 0.832576 8.2018 1.01067 6.5585 1.69135C4.91521 2.37202 3.51066 3.52471 2.52247 5.00364C1.53428 6.48256 1.00684 8.22131 1.00684 10C1.00941 12.3844 1.95774 14.6703 3.64374 16.3563C5.32974 18.0423 7.6157 18.9907 10.0001 18.9932ZM10.0001 4.75396C10.2224 4.75396 10.4397 4.81989 10.6246 4.94341C10.8095 5.06693 10.9536 5.2425 11.0386 5.44791C11.1237 5.65333 11.146 5.87936 11.1026 6.09742C11.0592 6.31549 10.9522 6.51579 10.795 6.67301C10.6377 6.83022 10.4374 6.93729 10.2194 6.98066C10.0013 7.02404 9.77528 7.00178 9.56987 6.91669C9.36446 6.83161 9.18889 6.68752 9.06536 6.50266C8.94184 6.31779 8.87591 6.10045 8.87591 5.87811C8.87591 5.57997 8.99435 5.29403 9.20517 5.08321C9.41599 4.87239 9.70192 4.75396 10.0001 4.75396ZM9.25063 8.50113H10.0001C10.3976 8.50113 10.7788 8.65905 11.0599 8.94014C11.341 9.22124 11.4989 9.60248 11.4989 10V14.4966C11.4989 14.6954 11.42 14.886 11.2794 15.0265C11.1389 15.1671 10.9483 15.2461 10.7495 15.2461C10.5507 15.2461 10.3601 15.1671 10.2196 15.0265C10.079 14.886 10.0001 14.6954 10.0001 14.4966V10H9.25063C9.05186 10 8.86124 9.92105 8.7207 9.7805C8.58015 9.63995 8.50119 9.44933 8.50119 9.25057C8.50119 9.05181 8.58015 8.86119 8.7207 8.72064C8.86124 8.58009 9.05186 8.50113 9.25063 8.50113Z" fill="#9496B7" />
        </svg>
    )
}

export default InfoIcon