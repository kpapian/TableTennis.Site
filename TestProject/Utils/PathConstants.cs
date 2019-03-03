using System;

namespace TestProject.Utils
{
    /// <summary>
    ///     PathConstants.
    /// </summary>
    public static class PathConstants
    {
        private const String RelativeDataPath = "Data\\";

        /// <summary>
        ///     About html content path.
        /// </summary>
        public const String RelativeAboutHtmlPath = RelativeDataPath + "about.html";

        /// <summary>
        ///     Coaches json path.
        /// </summary>
        public const String CoachesJsonPath = RelativeDataPath + "Coaches.json";
    }
}
