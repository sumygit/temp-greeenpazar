function ProductItemCompany({ children , title}: { children: React.ReactNode , title:string}) {
  return (
    <div className=" flex justify-center items-center text-[9px] text-white/80 rounded-sm font-medium absolute top-2 left-2 bg-brand-orange/50 px-2 py-1 z-10 tracking-wider transition-all duration-300 hover:bg-[#F97316]   truncate cursor-pointer">
      <span className="truncate" title={title}>{children}</span>
    </div>
  );
}
export default ProductItemCompany;
