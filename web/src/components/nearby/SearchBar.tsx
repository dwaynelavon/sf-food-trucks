import React, { useCallback, useState } from "react";
import { SearchHandler } from "./types";

interface IProps {
    onSearch: SearchHandler;
}

const SearchBar = ({ onSearch }: IProps) => {
    const [lat, setLat] = useState<number>();
    const [lng, setLng] = useState<number>();

    const searchDisabled = !lat || !lng;

    // Change handlers
    const handleLatChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setLat(parseFloat(e.target.value));
        },
        []
    );

    const handleLngChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setLng(parseFloat(e.target.value));
        },
        []
    );

    // Search
    const handleSearch = useCallback(() => {
        // Search only happens when search is not disabled
        onSearch(lat!, lng!);
    }, [lat, lng]);

    const handleCurrentLocationSearch = useCallback(() => {
        navigator.geolocation.getCurrentPosition(
            (position: Position) => {
                onSearch(position.coords.latitude, position.coords.longitude);
            },
            () => {
                alert("can not find current location");
            }
        );
    }, []);

    return (
        <div className="field is-horizontal">
            <div className="field-body ">
                <div className="field">
                    <p className="control is-expanded has-icons-left">
                        <input
                            className="input"
                            type="number"
                            placeholder="Latitude"
                            onChange={handleLatChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-globe"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control is-expanded has-icons-left">
                        <input
                            className="input"
                            type="number"
                            placeholder="Longitude"
                            onChange={handleLngChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-globe"></i>
                        </span>
                    </p>
                </div>
                <div className="field is-grouped">
                    <p className="control">
                        <button
                            disabled={searchDisabled}
                            className="button is-info"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </p>
                    {navigator.geolocation && (
                        <p className="control">
                            <button
                                className="button is-dark"
                                onClick={handleCurrentLocationSearch}
                            >
                                Current Location
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
