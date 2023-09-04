import { FC } from "react";
import SearchBar from "./SearchBar";
import { GetQueryAction } from "../action/User";
import { QuerySelector, UserSelector } from "../selectors/User";
import { State } from "../Reducer/Store";
import { connect } from "react-redux";
import { ConnectedProps } from "react-redux";

type UserListProps = ReduxProps;
const UserList: FC<UserListProps> = ({
  getQueryAction,

  query,
  UserData,
}) => {
  return (
    <>
      <div>
        <div>
          <SearchBar
            value={query}
            onChange={(event) => getQueryAction(event.target.value)}
          />
          <div className=" flex h-screen justify-center items-center">
            {query && (
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={UserData.avatar_url}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{UserData.login}</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  getQueryAction: GetQueryAction,
};

const mapStateToProps = (state: State) => {
  return { query: QuerySelector(state), UserData: UserSelector(state) };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(UserList);
