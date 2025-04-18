export default function Newscard() {
  return (
    
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden duration-300 bg-white rounded-lg 2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                alt="image"
                class="w-full"
              />
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="text-gray-800  hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                  >
                    New projects and updates on Xiphos 
                  </a>
                </h3>
                <p className="text-gray-500 text-base leading-relaxed text-body-color -6 mb-7">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

		  
  );
}
