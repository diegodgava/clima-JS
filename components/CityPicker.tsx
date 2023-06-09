import { Country, City, State } from 'country-state-city';
import Select from 'react-select';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GlobeIcon } from '@heroicons/react/solid';

type Option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type CityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

type StateOption = {
  value: {
    stateCode: string;
    name: string;
    countryCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<Option>({
        value: {
          latitude: "",
          longitude: "",
          isoCode: "BR",
        },
        label: "Brazil",
      });
  const [selectedState, setSelectedState] = useState<StateOption>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (option: Option) => {
    setSelectedCountry(option);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleSelectedState = (option: StateOption) => {
    setSelectedState(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option: CityOption) => {
    setSelectedCity(option);
    router.push(
      `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">País</label>
        </div>

        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>

      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="state">Estado</label>
          </div>

          <Select
            className="text-black"
            value={selectedState}
            onChange={handleSelectedState}
            options={
              State.getStatesOfCountry(selectedCountry.value.isoCode)?.map(
                (state) => ({
                  value: {
                    stateCode: state.isoCode!,
                    name: state.name!,
                    countryCode: state.countryCode!,
                  },
                  label: state.name!,
                })
              )
            }
          />
        </div>
      )}

      {selectedState && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="h-5 w-5 text-white" />
        <label htmlFor="city">Cidade</label>
            </div>
            <Select
        className="text-black"
        value={selectedCity}
        onChange={handleSelectedCity}
        options={
            City.getCitiesOfState(selectedState.value.countryCode, selectedState.value.stateCode)?.map(
                (city) => ({
                  value: {
                    latitude: city.latitude!,
                    longitude: city.longitude!,
                    countryCode: city.countryCode!,
                    name: city.name!,
                    stateCode: city.stateCode!,
                  },
                  label: city.name!,
                })
              )
        }
      />
    </div>
  )}
</div>
);
}

export default CityPicker;