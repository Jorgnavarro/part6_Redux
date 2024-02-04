import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const VisibilityFilter = () => {
    const dispatch = useDispatch()

    return(
        <div className='containerFilters'>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="filter" id="radioAll" onChange={()=>dispatch(filterChange('NORMAL'))} />
            <label className="form-check-label" htmlFor="radioAll">Normal</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="filter" id="radioMostVoted" onChange={()=>dispatch(filterChange('MOST_VOTED'))}/>
            <label className="form-check-label" htmlFor="radioMostVoted">Sort by most voted</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="filter" id="radioLeastVoted" onChange={()=>dispatch(filterChange('LEAST_VOTED'))} />
            <label className="form-check-label" htmlFor="radioLeastVoted">Sort by least voted</label>
          </div>
        </div>
    )
}

export default VisibilityFilter