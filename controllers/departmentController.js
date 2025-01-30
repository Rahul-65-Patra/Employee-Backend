import Department from '../models/Department.js';


const getDepartments = async(req,res)=>{
  try{
    const departments = await Department.find();
    return res.status(200).json({success:true, departments});
  }
  catch(error){
    return res.status(500).json({success:false, error: "get departments Server Error"});
  }
}

const addDepartment = async(req,res)=>{
  try{
      const {dep_name, description} = req.body;
      const newDep = new Department({
        dep_name,
        description
      })
      await newDep.save();
      return res.status(200).json({success:true, department:newDep});
  }
  catch(error){
    return res.status(500).json({success:false, error: "add department Server Error"});
  }
    
}


const getDepartment = async(req,res)=>{
  try{
    const {id} = req.params;
    const department = await Department.findById({_id:id});
    return res.status(200).json({success:true, department});
  }
  catch(error){
    return res.status(500).json({success:false, error: "get departments Server Error"});
  }
}

const updateDepartment = async(req,res)=>{
  try{
    const {id} = req.params;
    const {dep_name,description} = req.body;
    const updateDep = await Department.findByIdAndUpdate({_id:id},{dep_name,description});
    return res.status(200).json({success:true, updateDep});
  }
  catch(error){
    return res.status(500).json({success:false, error: "edit departments Server Error"});
  }
}


const deleteDepartment= async(req,res)=>{
  try{
    const {id} = req.params;
    const deleteDep = await Department.findById({_id:id});
    await deleteDep.deleteOne();
    return res.status(200).json({success:true, deleteDep});
  }
  catch(error){
    return res.status(500).json({success:false, error: "delete department Server Error"});
  }
 }



 
export {getDepartments,addDepartment,getDepartment,updateDepartment,deleteDepartment}