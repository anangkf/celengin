import Swal from "sweetalert2";
import { deleteKeinginan, deleteKeinginanWithItsCelengan } from "../store/features/keinginan/keinginanSlice";
import { randomlyShowModalReview } from "../store/features/modal/modalSlice";
import { theme } from "../themes";

export const handleDeleteKeinginan = (id, data, dispatch, navigate) =>{

  const { judul, celengans } = data
  Swal.fire({
    title: 'Apakah kamu yakin?',
    text: `Yakin mau menghapus ${judul}`,
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: theme.vars.blue,
    confirmButtonColor: theme.vars.red,
    confirmButtonText: 'Hapus',
    cancelButtonText: 'Batal'
  }).then((result) => {
    if (result.isConfirmed) {
      if(celengans === undefined || celengans.length === 0){
        dispatch(deleteKeinginan(id))
        .then(res =>{
          if(res.type === "deleteKeinginan/fulfilled"){
            Swal.fire(
              'Berhasil!',
              `Berhasil menghapus ${judul}`,
              'success'
            ).then((result) => {
              if (result.isConfirmed) {
                dispatch(randomlyShowModalReview())
              }
            })
            navigate && navigate('/keinginan')
          }else{
            Swal.fire(
              'Gagal!',
              `Tidak berhasil menghapus ${judul}`,
              'error'
            )
          }
        })
      }
      if(celengans.length > 0){
        dispatch(deleteKeinginanWithItsCelengan(id))
        .then(res =>{
          if(res.type === "delete/keinginanWithItsCelengan/fulfilled"){
            Swal.fire(
              'Berhasil!',
              `Berhasil menghapus ${judul}`,
              'success'
              )
              navigate('/keinginan')
          }else{
            Swal.fire(
              'Gagal!',
              `Tidak berhasil menghapus ${judul}`,
              'error'
            )
          }
        })
      }
    }
  })
}