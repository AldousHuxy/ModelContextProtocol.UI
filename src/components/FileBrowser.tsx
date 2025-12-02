import { useState } from 'react';

type FileNode = {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
};

type FileBrowserProps = {
  isDarkMode: boolean;
  onFileSelect: (filePath: string) => void;
};

// File structure based on actual LOMC directory
const mockFileStructure: FileNode = {
  name: '24-08-0233R Lemon Gulch Reach 1',
  path: '/lomcs/24-08-0233R Lemon Gulch Reach 1',
  type: 'folder',
  children: [
    {
      name: 'Appendix A - Hydraulic and Hydrologic Models',
      path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix A - Hydraulic and Hydrologic Models',
      type: 'folder',
      children: [
        {
          name: 'Results',
          path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix A - Hydraulic and Hydrologic Models/Results',
          type: 'folder',
          children: []
        }
      ]
    },
    {
      name: 'Appendix B - Proposed Plans',
      path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix B - Proposed Plans',
      type: 'folder',
      children: []
    },
    {
      name: 'Appendix C - FEMA MT-2 Forms',
      path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix C - FEMA MT-2 Forms',
      type: 'folder',
      children: []
    },
    {
      name: 'Appendix D - Floodplain Workmap',
      path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix D - Floodplain Workmap',
      type: 'folder',
      children: [
        {
          name: 'AutoCAD Floodplain Linework',
          path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix D - Floodplain Workmap/AutoCAD Floodplain Linework',
          type: 'folder',
          children: []
        }
      ]
    },
    {
      name: 'Appendix E - Annotated Materials',
      path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix E - Annotated Materials',
      type: 'folder',
      children: []
    },
    {
      name: 'Appendix F - Comparison Tables',
      path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix F - Comparison Tables',
      type: 'folder',
      children: []
    },
    {
      name: 'Appendix G - NFIP Requirements',
      path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix G - NFIP Requirements',
      type: 'folder',
      children: [
        {
          name: 'Notification Letters',
          path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix G - NFIP Requirements/Notification Letters',
          type: 'folder',
          children: []
        }
      ]
    },
    {
      name: 'Appendix H - Agreement Tables',
      path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix H - Agreement Tables',
      type: 'folder',
      children: []
    },
    {
      name: 'Appendix I - Other Information',
      path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information',
      type: 'folder',
      children: [
        {
          name: 'Bridge Information',
          path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Bridge Information',
          type: 'folder',
          children: [
            {
              name: 'Addl PWSD Bridge Info',
              path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Bridge Information/Addl PWSD Bridge Info',
              type: 'folder',
              children: [
                {
                  name: '2021-08-17 BRIDGE TOPO.dwg',
                  path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Bridge Information/Addl PWSD Bridge Info/2021-08-17 BRIDGE TOPO.dwg',
                  type: 'file'
                }
              ]
            }
          ]
        },
        {
          name: 'Effective Data',
          path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Effective Data',
          type: 'folder',
          children: [
            {
              name: 'FIRM Panels',
              path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Effective Data/FIRM Panels',
              type: 'folder',
              children: []
            },
            {
              name: 'HEC-RAS',
              path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Effective Data/HEC-RAS',
              type: 'folder',
              children: [
                {
                  name: 'Lemon_F.prj',
                  path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Effective Data/HEC-RAS/Lemon_F.prj',
                  type: 'file'
                },
                {
                  name: 'LemonFW_1.prj',
                  path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Effective Data/HEC-RAS/LemonFW_1.prj',
                  type: 'file'
                },
                {
                  name: 'LemonFW.prj',
                  path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Effective Data/HEC-RAS/LemonFW.prj',
                  type: 'file'
                }
              ]
            }
          ]
        },
        {
          name: 'Lemon Gulch at Meadowlark CLOMR References',
          path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Lemon Gulch at Meadowlark CLOMR References',
          type: 'folder',
          children: []
        },
        {
          name: 'Lemon Gulch Trail Crossing CLOMR References',
          path: '/lomcs/24-08-0233R Lemon Gulch Reach 1/Appendix I - Other Information/Lemon Gulch Trail Crossing CLOMR References',
          type: 'folder',
          children: []
        }
      ]
    }
  ]
};

export const FileBrowser = ({ isDarkMode, onFileSelect }: FileBrowserProps) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set([mockFileStructure.path]));

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  const renderNode = (node: FileNode, level: number = 0) => {
    const isExpanded = expandedFolders.has(node.path);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.path}>
        <div
          className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
            isDarkMode
              ? 'hover:bg-gray-700 text-gray-200'
              : 'hover:bg-gray-100 text-gray-700'
          }`}
          style={{ paddingLeft: `${level * 12 + 8}px` }}
          onClick={() => {
            if (node.type === 'folder') {
              toggleFolder(node.path);
            } else {
              onFileSelect(node.path);
            }
          }}
        >
          {node.type === 'folder' && (
            <svg
              className={`w-4 h-4 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          )}
          {node.type === 'folder' ? (
            <svg className="w-4 h-4 flex-shrink-0 text-mhfd-blue" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
          )}
          <span className="text-sm truncate">{node.name}</span>
        </div>
        {node.type === 'folder' && isExpanded && hasChildren && (
          <div>
            {node.children!.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-1">
      {renderNode(mockFileStructure)}
    </div>
  );
};
